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

const { Note } = require("../../db/models");
const verifyAccessToken = require("../middlewares/verifyAccessToken");

const apiProductsRouter = express.Router();

apiProductsRouter
  .route("/")
  .get(async (req, res) => {
    try {
      const products = await Note.findAll({
        order: [["createdAt", "DESC"]],
      });
      return res.json(products);
    } catch (error) {
      return res.status(500).json(error);
    }
  })
  .post(
    /* upload.single('img'), */
    verifyAccessToken,
    async (req, res) => {
      try {
        if (!req.body?.title)
          return res.status(500).json({ message: "Empty reqbody" });
        const { title, text, img, isFav } = req.body;
        const newProduct = await Note.create({
          title,
          text,
          img: req.file?.filename || img,
          isFav,
        });
        console.log(">>>>>>>>>>newProduct", newProduct);
        return res.status(201).json(newProduct);
      } catch (error) {
        return res.status(500).json(error);
      }
    }
  );

apiProductsRouter.delete("/:id", async (req, res) => {
  await Note.destroy({ where: { id: req.params.id } });
  res.sendStatus(200);
});

apiProductsRouter.put("/:id", async (req, res) => {
  try {
    const product = await Note.findByPk(req.params.id);
    await product.update(req.body);
    const newProduct = await Note.findByPk(product.id);
    res.status(200).json(newProduct);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

apiProductsRouter.put("/isFav/:id", async(req,res)=> {
  try{
    console.log('req.params>>>>>>>>>>',req.params);
    const product = await Note.findByPk(req.params.id);
    product.isFav = !product.isFav;
    product.save();
    res.status(200).json({message:'success'});
  }catch (error){
    console.log(error);
    res.status(500).json(error);
  }
})

module.exports = apiProductsRouter;
