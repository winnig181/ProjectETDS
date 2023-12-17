const express = require("express");

const { Userreview, User } = require("../../db/models");
// const verifyAccessToken = require("../middlewares/verifyAccessToken");

const apiReviewsRouter = express.Router();

apiReviewsRouter
  .route("/")
  .get(async (req, res) => {
    try {
      const reviews = await Userreview.findAll({
        include: User,
        order: [["createdAt", "DESC"]],
      });
      return res.json(reviews);
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
        if (!req.body?.review || !req.body?.rating)
          return res.status(500).json({ message: "Empty reqbody" });
        const { review, rating,
          // при клике на Оставить отзыв в хэндлер нужно передать targetId
        targetId
       } = req.body;
        const newReview = await Userreview.create({
          review,
          rating,
          targetId,
          userId: res.locals.user.id,
        });
        console.log(">>>>>>>>>>newReview", newReview);
        return res.status(201).json(newReview);
      } catch (error) {
        return res.status(500).json(error);
      }
    }
  );

  apiReviewsRouter.delete("/:id", async (req, res) => {
  await Userreview.destroy({ where: { id: req.params.id } });
  res.sendStatus(200);
});

apiReviewsRouter.put("/:id", async (req, res) => {
  try {
    const review = await Userreview.findByPk(req.params.id);
    await review.update(req.body);
    const newReview = await Userreview.findByPk(review.id);
    res.status(200).json(newReview);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});


module.exports = apiReviewsRouter;
