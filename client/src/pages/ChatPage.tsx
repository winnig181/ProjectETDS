import React, { lazy, useEffect, useState } from 'react';
import { Box, Container, Typography } from '@mui/material';
import PostsWrapper from '../components/chat/PostsWrapper';
import { useAppDispatch, useAppSelector } from '../redux/hook';
import usePosts from '../components/hooks/usePosts';
import { thunkCheckAuth } from '../redux/slices/auth/createAsyncThunk';
import useWs from '../components/hooks/useWs';

const PostForm = lazy(() => import('../components/chat/PostForm'));

export default function ChatPage({ posts }): JSX.Element {
  const [inBrowser, setInBrowser] = useState(false);
  const [wsConnect, setWsConnect] = useState(false);

  const dispatch = useAppDispatch();
  const auth = useAppSelector((store) => store.authSlice);
const currentUser = auth.user;

  useEffect(() => {
    void dispatch(thunkCheckAuth());
  }, []);
  
  useEffect(() => {
    setInBrowser(true);
  }, []);

  const { currentPosts, deletePostHandler, submitPostHandler, setCurrentPosts } = usePosts(posts);
  const { wsPostSubmitHandler } = useWs(currentUser, setWsConnect, setCurrentPosts);
  
  return (
    // <Container sx={{ margin: 'auto' }}>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <Typography
        variant="h5"
        component="div"
        gutterBottom
        style={{ marginTop: '40px', marginBottom: '40px' }}
      >
        Чат с другим пользователем
      </Typography>
      {currentUser && inBrowser && (
        <PostForm submitPostHandler={submitPostHandler} wsPostSubmitHandler={wsPostSubmitHandler} />
      )}
      <PostsWrapper
        posts={currentPosts}
        deletePostHandler={deletePostHandler}
        currentUser={currentUser}
      />
    </Box>
  );
}
