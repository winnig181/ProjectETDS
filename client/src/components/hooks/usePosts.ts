/* eslint-disable @typescript-eslint/explicit-function-return-type */
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import type { PostType } from '../../types/post/post';
// import { useAppDispatch, useAppSelector } from '../../redux/hook';
// import { thunkPostsLoad } from '../../redux/slices/posts/createAsyncThunk';

// export default function usePosts(posts:PostType[]):JSX.Element {
// // export default function usePosts() {


//   // const dispatch = useAppDispatch();
//   // useEffect(() => {
//   //   void dispatch(thunkPostsLoad());
//   // }, []);
//   const [currentPosts, setCurrentPosts] = useState(posts|| []);

//   const submitPostHandler = (e) => { 
//     e.preventDefault();

//     const data = Object.fromEntries(new FormData(e.target));
//     if (!data.body) return;
//     }

//     axios
//       .post('/api/v1/posts', data)
//       .then((res) => {
//         setCurrentPosts([...currentPosts, res.data]);
//         e.target.reset();
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   const deletePostHandler = (id:number) => {
//     axios
//       .delete(`/api/v1/posts/${id}`)
//       .then(() => {
//         setCurrentPosts(currentPosts.filter((post) => post.id !== id));
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };
//   return {
//     currentPosts,
//     submitPostHandler,
//     deletePostHandler,
//     setCurrentPosts,
//   };
// }
