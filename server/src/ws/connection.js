/* eslint-disable no-case-declarations */
/* eslint-disable no-unused-vars */
// import { Post } from '../../db/models';
const jwt = require('jsonwebtoken');
const { Post } = require('../../db/models');

const map = new Map();

const connectionCb = (socket, request) => {
  const access = request.cookies.refreshToken;

  const userFromJWT = jwt.verify(access, process.env.REFRESH_TOKEN_SECRET);
  // console.log('>>>>>>>userFromJWT', userFromJWT);
  const userId = userFromJWT.user.id;
  map.set(userId, { ws: socket, user: userFromJWT.user });

  socket.on('message', async (message) => {
    const { type, payload } = JSON.parse(message);

    switch (type) {
      case 'ADD_NEW_POST':
        const newPost = await Post.create({ ...payload, userId });
        map.forEach(({ ws, user }) => {
          ws.send(JSON.stringify({
            type: 'ADD_POST_FROM_BACKEND',
            payload: newPost,
          }));
        });
        break;

      default:
        break;
    }
  });

  socket.on('error', console.error);
  socket.on('close', () => {
    map.delete(userId);
  });
};

// export default connectionCb;
module.exports = connectionCb;

