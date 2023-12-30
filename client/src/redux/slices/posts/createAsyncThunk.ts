/* eslint-disable import/prefer-default-export */
import { createAsyncThunk } from '@reduxjs/toolkit';
import PostsService from '../../../services/posts';
import type { AddPostFormData, PostType } from '../../../types/post/post';

export const thunkPostsLoad = createAsyncThunk('postSlice/thunkPostsLoad', async () =>
  PostsService.getPosts(),
);

export const thunkPostsAdd = createAsyncThunk(
  'postsSlice/thunkPostsAdd',
  async (formData: AddPostFormData) => PostsService.addPost(formData),
);

export const thunkPostsDelete = createAsyncThunk(
  'postsSlice/thunkPostsDelete',
  async (id: PostType['id']) => PostsService.deletePost(id),
);

