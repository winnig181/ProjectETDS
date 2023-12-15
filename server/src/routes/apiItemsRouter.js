const express = require("express");
// const multer = require('multer');

// const storage = multer.diskStorage({
//   destination(req, file, cb) {
//     cb(null, './public/img');
//   },
//   filename(req, file, cb) {
//     const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
//     cb(null, `${file.fieldname}-${uniqueSuffix}`);
//   },
// });
// const upload = multer({ storage });

const { Item, User } = require("../../db/models");
// const verifyAccessToken = require("../middlewares/verifyAccessToken");

const apiItemsRouter = express.Router();

apiItemsRouter
  .route("/")
  .get(async (req, res) => {
    try {
      const items = await Item.findAll({
        order: [["createdAt", "DESC"]],
        include: User,
      });
      return res.json(items);
    } catch (error) {
      return res.status(500).json(error);
    }
  })
  .post(
    /* upload.single('img'), */
    // verifyAccessToken,
    async (req, res) => {
      try {
        if (!req.body?.title||!req.body?.title|| !req.body?.description || !req.body?.price || !req.body?.condition || !req.body?.subCategoryId)
          return res.status(500).json({ message: "Empty reqbody" });
        const { price,title, description, img1,img2,img3,condition, status,hidden,subCategoryId} = req.body;
        const newItem = await Item.create({
          title,
          description,
          price,
          img1: req.file?.filename || img1,
          img2: req.file?.filename || img2,
          img3: req.file?.filename || img3,
          condition,
          status,
          hidden,
          subCategoryId,
          userId: res.locals.user.id,
        });
        const itemWithAuthor = await Item.findByPk(newItem.id, {
          include: User,
        });
        console.log(">>>>>>>>>>itemWithAuthor", itemWithAuthor);
        return res.status(201).json(itemWithAuthor);
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
