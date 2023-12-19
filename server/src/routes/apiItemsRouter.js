const express = require("express");
const multer = require("multer");

const { Item, User } = require("../../db/models");
const verifyAccessToken = require("../middlewares/verifyAccessToken");

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, "./public/img");
  },
  filename(req, file, cb) {
    const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
    const typeName = file.originalname.split(".");
    cb(
      null,
      `${file.fieldname}-${uniqueSuffix}.${typeName[typeName.length - 1]}`
    );
  },
});

const upload = multer({ storage });

// const cpUpload = upload.fields([
//   { name: "img1", maxCount: 1 },
//   { name: "img2", maxCount: 1 },
//   { name: "img3", maxCount: 1 },
// ]);

const cpUpload = upload.array("files", 3);

const apiItemsRouter = express.Router();

apiItemsRouter
  .route("/")
  .get(verifyAccessToken, async (req, res) => {
    try {
      const items = await Item.findAll({
        order: [["createdAt", "DESC"]],
        include: { model: User, as: "ownerDetails" },
        // where:{userId: res.locals.user.id},
      });
      return res.json(items);
    } catch (error) {
      console.log(error);
      return res.status(500).json(error);
    }
  })
  .post(
    // upload.single('img'),
    cpUpload,
    verifyAccessToken,
    async (req, res) => {
      console.log("req.file>>>>>", req.files);
      try {
        if (
          !req.body?.title ||
          !req.body?.price ||
          !req.body?.condition ||
          !req.body?.subCategoryId
        )
          return res.status(500).json({ message: "Empty reqbody" });
        console.log("req.body>>>>>", req.body);
        console.log("req.file>>>>>", req.files);
        const {
          price,
          title,  
          description,
          condition,
          status,
          hidden,
          subCategoryId,
        } = req.body;
        const newItem = await Item.create({
          title,
          description: description || "",
          price: Number(price),
          img1: req.files[0]?.filename || "",
          img2: req.files[1]?.filename || "",
          img3: req.files[2]?.filename || "",
          // img1: req.file?.filename || img1,
          // img2: req.file?.filename || img2,
          // img3: req.file?.filename || img3,
          condition,
          status,
          hidden,
          subCategoryId,
          userId: res.locals.user.id,
        });
        console.log(">>>>>newItem", newItem);
        // const itemWithAuthor = await Item.findByPk(newItem.id, {
        //   include: User,
        // });
        // console.log(">>>>>>>>>>itemWithAuthor", itemWithAuthor);
        return res.status(201).json(newItem);
      } catch (error) {
        return res.status(500).json(error);
      }
    }
  );

apiItemsRouter.delete("/:id", async (req, res) => {
  await Item.destroy({ where: { id: req.params.id } });
  res.sendStatus(200);
});

apiItemsRouter.put("/:id", async (req, res) => {
  try {
    const item = await Item.findByPk(req.params.id);
    await item.update(req.body);
    const newItem = await Item.findByPk(item.id);
    res.status(200).json(newItem);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

// apiItemsRouter.put("/isFav/:id", async(req,res)=> {
//   try{
//     console.log('req.params>>>>>>>>>>',req.params);
//     const item = await Item.findByPk(req.params.id);
//     item.isFav = !item.isFav;
//     item.save();
//     res.status(200).json({message:'success'});
//   }catch (error){
//     console.log(error);
//     res.status(500).json(error);
//   }
// })

module.exports = apiItemsRouter;
