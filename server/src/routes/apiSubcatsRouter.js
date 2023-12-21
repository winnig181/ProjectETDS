const express = require("express");
const { Subcategory } = require("../../db/models");

const apiSubcatsRouter = express.Router();

apiSubcatsRouter
  .route("/:id")
  .get(async (req, res) => {
    try {
      const subcats = await Subcategory.findAll({
        where:{categoryId: req.params.id},
        order: [["createdAt", "DESC"]],
      });
      return res.json(subcats);
    } catch (error) {
      console.log(error);
      return res.status(500).json(error);
    }
  });


// apiSubcatsRouter.delete("/:id", async (req, res) => {
//   await Deal.destroy({ where: { id: req.params.id } });
//   res.sendStatus(200);
// });

// apiSubcatsRouter.put("/:id", async (req, res) => {
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


module.exports = apiSubcatsRouter;
