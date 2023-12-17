/* eslint-disable consistent-return */
const express = require("express");
const bcrypt = require("bcrypt");
// const uuid = require("uuid")
const { User } = require("../../db/models");
const generateTokens = require("../utils/generateTokens");
const jwtConfig = require("../config/jwtConfig");
const cookiesConfig = require("../config/cookiesConfig");
const verifyRefreshToken = require("../middlewares/verifyRefreshToken");
// const mailService = require("../utils/mail-service");
const authRouter = express.Router();

authRouter.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (!user) return res.status(404).json({ message: "User not found" });

    const isValid = await bcrypt.compare(password, user.hashpass);
    if (!isValid) return res.status(400).json({ message: "Invalid password" });

    const plainUser = user.get();
    console.log('>>>>>>>>>>>>>>>>>>>>юзер на беке',plainUser);
    delete plainUser.hashpass;
    const { accessToken, refreshToken } = generateTokens({
      user: plainUser,
 
    });
    res
      .cookie(jwtConfig.refresh.name, refreshToken, cookiesConfig.refresh)
      .status(200)
      .json({ accessToken, user: plainUser});
  } catch (error) {
    console.log('registration error',error);
    res.status(500).json(error);
  }
});

authRouter.post("/signup", async (req, res) => {
  try {
    const { email, password, name } = req.body;
    const [user, created] = await User.findOrCreate({
      where: { email },
      defaults: { name, hashpass: await bcrypt.hash(password, 10) },
      // activationLink: uuid.v4() // рандомная уникальная строка
    });

    // await mailService.sendActivationMail(email, user.activationLink)

    if (!created)
      return res.status(400).json({ message: "Email already exists" });

    const plainUser = user.get();
    delete plainUser.hashpass;
    const { accessToken, refreshToken } = generateTokens({
      user: plainUser,
    });
    res
      .cookie(jwtConfig.refresh.name, refreshToken, cookiesConfig.refresh)
      .status(200)
      .json({ accessToken, user: plainUser });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});


// authRouter.get("activate/:link", (req, res) => {
// })

authRouter.get("/logout", (req, res) => {
 
  res.clearCookie(jwtConfig.refresh.name, cookiesConfig.refresh).sendStatus(200);
});

authRouter.get("/check", verifyRefreshToken, (req, res) => {
  res.json({ user: res.locals.user, accessToken: "" });
});

module.exports = authRouter;
