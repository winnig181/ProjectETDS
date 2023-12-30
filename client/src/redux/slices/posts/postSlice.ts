/* eslint-disable import/prefer-default-export */
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import {
  thunkPostsAdd,
  thunkPostsDelete,
  thunkPostsLoad,
} from './createAsyncThunk';
import type { PostSliceState } from '../../../types/post/post';

const initialState: PostSliceState = {
  posts: [],
};

export const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(thunkPostsLoad.fulfilled, (state, action) => {
      state.posts = action.payload;
    });
    builder.addCase(thunkPostsLoad.rejected, (state, action) => {
      console.log(action.error);
    });
    builder.addCase(thunkPostsAdd.fulfilled, (state, action) => {
      // применяем методы, мутирующие исходный массив
      state.posts.unshift(action.payload);
    });
    builder.addCase(thunkPostsDelete.fulfilled, (state, action) => {
      const postIndex = state.posts.findIndex((note) => note.id === action.payload);
      if (postIndex !== -1) {
        state.posts.splice(postIndex, 1);
      }
    });
  },
});

export default postSlice.reducer;
