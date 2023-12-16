/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { useState } from 'react';
import axios from 'axios';
import type { PostType } from '../../types/post/post';


export default function usePosts(posts:PostType[]) {
  const [currentPosts, setCurrentPosts] = useState(posts || []);

  const submitPostHandler = (e) => {
    e.preventDefault();

    const data = Object.fromEntries(new FormData(e.target));
    if (!data.body) {
      return res.status(400).json({ message: 'Please add text' });
    }

    axios
      .post('/api/posts', data)
      .then((res) => {
        setCurrentPosts([...currentPosts, res.data]);
        e.target.reset();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deletePostHandler = (id:number) => {
    axios
      .delete(`/api/posts/${id}`)
      .then(() => {
        setCurrentPosts(currentPosts.filter((post) => post.id !== id));
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return {
    currentPosts,
    submitPostHandler,
    deletePostHandler,
    setCurrentPosts,
  };
}
