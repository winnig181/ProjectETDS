import React, { lazy, useEffect, useState } from 'react';
import { Box, Container, Typography } from '@mui/material';
import PostsWrapper from '../components/chat/PostsWrapper';
import { useAppDispatch, useAppSelector } from '../redux/hook';
import usePosts from '../components/hooks/usePosts';
import { thunkCheckAuth } from '../redux/slices/auth/createAsyncThunk';
import useWs from '../components/hooks/useWs';
import type { PostType } from '../types/post/post';
import { thunkPostsLoad } from '../redux/slices/posts/createAsyncThunk';

const PostForm = lazy(() => import('../components/chat/PostForm'));

export default function ChatPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const [inBrowser, setInBrowser] = useState(false);
  const [wsConnect, setWsConnect] = useState(false);
  
  const posts = useAppSelector((state)=>state.postSlice.posts);
  useEffect(() => {
    void dispatch(thunkCheckAuth());
    void dispatch(thunkPostsLoad());
  }, []);
  const [currentPosts, setCurrentPosts] = useState(posts || []);

  const auth = useAppSelector((store) => store.authSlice);
  const currentUser = auth.user;
  // console.log('currentUser>>>>>>>>>>>>',currentUser);
  
  
  const { wsPostSubmitHandler,wsPostDeleteHandler } = useWs(currentUser, setWsConnect, setCurrentPosts);
  
  useEffect(() => {
    setInBrowser(true);
  }, []);
  
  return (
    <Container sx={{ margin: 'auto' }}>
      <Typography variant='body1' sx={{ alignItems:"center", justifyContent:"space-between"}}>
        <span style={{
          color: wsConnect ? 'green' : 'red',
        }}
        >
          Ws App
        </span>
        </Typography>

      <Typography
        variant="h5"
        component="div"
        gutterBottom
        style={{ marginTop: '40px', marginBottom: '40px' }}
      >
        Чат с другим пользователем
      </Typography>
      {currentUser && inBrowser && (
        <PostForm 
         wsPostSubmitHandler={wsPostSubmitHandler} />
      )}
      <PostsWrapper
        posts={currentPosts}
        currentUser={currentUser}
        wsPostDeleteHandler={wsPostDeleteHandler}
      />
    </Container>
  );
}
