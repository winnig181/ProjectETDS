import cookieParser from 'cookie-parser';
import jwt from 'jsonwebtoken';

const { WebSocketServer } = require('ws');

export const wsServer = new WebSocketServer(
  {
    clientTracking: false,
    noServer: true,
  },
);

function onSocketError(err) {
  console.error(err);
}

export const upgradeCb = (request, socket, head) => {
  socket.on('error', onSocketError);
  console.log('Parsing session from request...');

  // парсим пользователя из cookie

  cookieParser()(request, {}, () => {
    const access = request.cookies.refreshToken;

    socket.on('error', (err) => {
      console.log('Socket error:', err);
    });
    console.log('Parsing session from request...');
    try {
      jwt.verify(access, process.env.REFRESH_TOKEN_SECRET);

      console.log('JWT toket is parsed!');

      socket.removeListener('error', (err) => {
        console.log('Socket error:', err);
      });

      wsServer.handleUpgrade(request, socket, head, (ws) => {
        wsServer.emit('connection', ws, request);
      });
    } catch (e) {
      console.log('wsServer ----->>>', e);
    }
  });
};
