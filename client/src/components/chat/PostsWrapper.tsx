import React from 'react';
import { Grid, Typography } from '@mui/material';
import type { UserType } from '../../types/auth';
import type { PostType } from '../../types/post/post';
import OnePost from './OnePost';

type PostsWrapperProps = {
  posts: PostType[];
  currentUser: UserType;
  wsPostDeleteHandler:(id:number)=>void;
};
export default function PostsWrapper({
  posts,
  currentUser,
  wsPostDeleteHandler,
}: PostsWrapperProps): JSX.Element {
  // const posts = useAppSelector((state)=>state.postSlice.posts);
  // console.log('posts>>>>>>', posts);

  return (
    <>
      <Typography
        variant="h6"
        sx={{ alignSelf: 'center', marginBottom: '0px', paddingTop: '30px' }}
      >
        История сообщений
      </Typography>
      <Grid
        container
        spacing={0.5}
        sx={{
          marginTop: '10px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
        }}
      >
        {posts.map((post) => (
          <Grid key={post.id} item xs={12}>
            <OnePost currentUser={currentUser} post={post} wsPostDeleteHandler={wsPostDeleteHandler} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}
