const express = require("express");


const { Deal, User, Item } = require("../../db/models");
const verifyAccessToken = require("../middlewares/verifyAccessToken");

const apiDealsRouter = express.Router();

apiDealsRouter
  .route("/")
  .get(
    verifyAccessToken, 
    async (req, res) => {
      console.log('>>!!>**>>',res.locals.user);
    try {
      const deals = await Deal.findAll({
        where:{tenantId: res.locals.user.id},
        order: [["createdAt", "DESC"]],
        include: [
          { model: User, as: 'ownerDetails' },
          { model: Item}
        ],
      });
      return res.json(deals);
    } catch (error) {
      console.log(error);
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

// apiDealsRouter.delete("/:id", async (req, res) => {
//   await Deal.destroy({ where: { id: req.params.id } });
//   res.sendStatus(200);
// });

// apiDealsRouter.put("/:id", async (req, res) => {
//   try {
//     const deal = await Deal.findByPk(req.params.id);
//     await deal.update(req.body);
//     const newDeal = await Deal.findByPk(deal.id);
//     res.status(200).json(newDeal);
//   } catch (error) {
//     console.log(error);
//     res.status(500).json(error);
//   }
// });


module.exports = apiDealsRouter;
