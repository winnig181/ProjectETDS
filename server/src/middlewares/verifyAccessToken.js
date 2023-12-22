require("dotenv").config();
const jwt = require("jsonwebtoken");

function verifyAccessToken(req, res, next) {
  try {
    const accessToken = req.headers.authorization.split(" ")[1];
    const { user } = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET);
    res.locals.user = user;
    next();
  } catch (error) {
    console.log(error);
    res.status(403).send('Invalid access token');
    // next();
  }
}

module.exports = verifyAccessToken;
