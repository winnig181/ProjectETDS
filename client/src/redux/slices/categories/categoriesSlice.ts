/* eslint-disable import/prefer-default-export */
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { thunkCategoriesLoad } from './createAsyncThunk';
import type { CategoriesSliceState } from '../../../types/category';

const initialState: CategoriesSliceState = {
  categories: [],
};

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
  },
  extraReducers(builder) {
    builder.addCase(thunkCategoriesLoad.fulfilled, (state, action) => {
      state.categories = action.payload;
    });
    builder.addCase(thunkCategoriesLoad.rejected, (state, action) => {
      console.log(action.error);
    });

  },
});


export default categoriesSlice.reducer;
/* eslint-disable import/prefer-default-export */
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { thunkCategoriesLoad } from './createAsyncThunk';
import type { CategoriesSliceState } from '../../../types/category';

const initialState: CategoriesSliceState = {
  items: [],
};

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
  },
  extraReducers(builder) {
    builder.addCase(thunkCategoriesLoad.fulfilled, (state, action) => {
      state.categories = action.payload;
    });
    builder.addCase(thunkCategoriesLoad.rejected, (state, action) => {
      console.log(action.error);
    });

  },
});


export default categoriesSlice.reducer;
