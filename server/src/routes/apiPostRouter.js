const express = require("express");
const { Post,User } = require("../../db/models");
const verifyAccessToken = require("../middlewares/verifyAccessToken");

const apiPostRouter = express.Router();

apiPostRouter.get('/', 
// verifyAccessToken,
async (req, res) => {
  try{
    const posts = await Post.findAll({
      order: [["createdAt", "DESC"]],
      include: { model: User},
    });
    // console.log('>>GET: posts>>>>',posts);
    return res.json(posts);
  } catch(error){
    console.log(error);
    return res.status(500).json(error);
  }
});

apiPostRouter
.post('/', 
verifyAccessToken,
async (req, res) => {
  const { title, body } = req.body;
  if (!body) {
    res.status(400).json({ message: 'Не все поля заполнены' });
    return;
  }
  console.log('>>POST: res.locals.user>>>>',res.locals.user);
  const post = await Post.create({ title, body, userId: res.locals.user.id });
  const postwithUser = await Post.findByPk(post.id)({
    include: { model: User},
  });
  res.json(postwithUser);
});

apiPostRouter
.delete('/:id', 
async (req, res) => {
  const { id } = req.params;
  if (!id) {
    res.status(400).json({ message: 'Не передан id' });
    return;
  }
  if (Number.isNaN(Number(id))) {
    res.status(400).json({ message: 'Неверный id' });
  }
  await Post.destroy({ where: { id } });
  res.sendStatus(200);
});

module.exports = apiPostRouter;