const express = require("express");

const { Item, User } = require("../../db/models");
const verifyAccessToken = require("../middlewares/verifyAccessToken");
const req = require("express/lib/request");

const apiItemsRouter = express.Router();

apiItemsRouter
  .route("/")
  .get(verifyAccessToken, async (req, res) => {
    try { const items = await Item.findAll({
        order: [["createdAt", "DESC"]],
        include: { model: User, as: 'ownerDetails' },
        // where:{userId: res.locals.user.id},
      });
      return res.json(items);
    } catch (error) {
      console.log(error);
      return res.status(500).json(error);
    }
  })
  .post(
    async (req, res) => {
      try {
        if (!req.body?.title||!req.body?.description || !req.body?.price || !req.body?.condition || !req.body?.subCategoryId)
          return res.status(500).json({ message: "Empty req.body" });
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

apiItemsRouter.get(`/:id`, async (req, res) => {
    const items = await Item.findAll({
      where:{subCategoryId: req.params.id},
      order: [["createdAt", "DESC"]],
    });
    return res.json(items);
})

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

module.exports = apiItemsRouter;
