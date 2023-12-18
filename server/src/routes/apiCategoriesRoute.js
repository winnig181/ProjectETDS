const { Category } = require("../../db/models");
const express = require("express");

const apiCategoriesRouter = express.Router();

apiCategoriesRouter
    .route("/")
    .get(async (req, res) => {
        try {
            const categories = await Category.findAll({
                order: [["createdAt", "DESC"]],
            });
           
            return res.json(categories);
        } catch (error) {
            console.log(error);
            return res.status(500).json(error);
        }
    });
module.exports = apiCategoriesRouter;
