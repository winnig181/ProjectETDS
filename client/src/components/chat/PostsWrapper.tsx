import React from 'react';
import { Button, Card, Container, Grid } from '@mui/material';
import type { UserType } from '../../types/auth';
import type { PostType } from '../../types/post/post';

type PostsWrapperProps={
  posts:PostType[];
  deletePostHandler:(id:number)=>void;
  currentUser: UserType;
}
export default function PostsWrapper({ posts, deletePostHandler, currentUser }:PostsWrapperProps ):JSX.Element {
  return (
    <Grid container spacing={1}>
      {posts.map((post) => (
        <Grid key={post.id} item xs={1} >
            <div>{post.body}</div>
            {currentUser && currentUser.id === post.userId && (
            <Button variant="outlined" onClick={() => deletePostHandler(post.id)}>Удалить</Button>
            )}
        </Grid>
      ))}
    </Grid>
  );
}
