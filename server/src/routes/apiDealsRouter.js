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
          { model: Item},
          { model: User, as: 'tenantDetails'},
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
    verifyAccessToken,
    async (req, res) => {
      try {
        if (!req.body?.startDate || !req.body?.endDate|| !req.body?.ownerId || !req.body?.tenantId || !req.body?.itemId )
          return res.status(500).json({ message: "ошибка на сервере при добавлении сделки" });
        const {ownerId, tenantId, itemId, startDate, endDate} = req.body;
        const newDeal = await Deal.create({
          ownerId,
          tenantId,
          itemId,
          startDate,
          endDate,
          ownerApproveDeal: false,
          ownerCloseDeal: false,
          tenantApproveDeal: false,
          tenantCloseDeal: false
        });
        
        console.log("сделка зашла на в базу", newDeal);
        return res.status(201).json(newDeal);
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
