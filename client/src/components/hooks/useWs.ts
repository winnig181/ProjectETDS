import React, { useEffect, useRef } from 'react';

export default function useWs(currentUser, setWsConnect, setCurrentPosts) {
  const socketRef = useRef(null);

  useEffect(() => {
    const socketConnect = () => {
      socketRef.current = new WebSocket('ws://localhost:3000');
      const socket = socketRef.current;

      socket.onopen = () => {
        setWsConnect(true);
      };

      socket.onmessage = (event) => {
        const { type, payload } = JSON.parse(event.data);

        switch (type) {
          case 'ADD_POST_FROM_BACKEND':
            console.log('ADD_POST_FROM_BACKEND --->>>');
            setCurrentPosts((prev) => [...prev, payload]);
            break;

          default:
            break;
        }

        console.log(payload);
      };

      socket.onclose = () => {
        setWsConnect(false);
        setTimeout(() => {
          socketConnect();
        }, 2000);
      };
    };

    if (currentUser) {
      socketConnect();
    }
  }, [currentUser]);

  const wsPostSubmitHandler = (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    const socket = socketRef.current;
    if (!socket) return;

    socket.send(JSON.stringify({
      type: 'ADD_NEW_POST',
      payload: data,
    }));
  };

  return {
    wsPostSubmitHandler,
  };
}
