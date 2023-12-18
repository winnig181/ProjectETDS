/* eslint-disable import/prefer-default-export */
import { createAsyncThunk } from '@reduxjs/toolkit';
import type { CategoryType, AddCategoryFormData } from '../../../types/category';
import CategoriesService from '../../../services/category';

export const thunkCategoriesLoad = createAsyncThunk('categoriesSlice/thunkCategoriesLoad', async () =>
  CategoriesService.getCategories(),
);

export const thunkCategoriesAdd = createAsyncThunk(
  'categoriesSlice/thunkCategoriesAdd',
  async (formData: AddCategoryFormData) => CategoriesService.addCategory(formData),
);

export const thunkCategoriesDelete = createAsyncThunk(
  'categoriesSlice/thunkCategoriesDelete',
  async (id: CategoryType['id']) => CategoriesService.deleteCategory(id),
);

export const thunkCategoriesEdit = createAsyncThunk(
  'CategoriesSlice/thunkCategoriesEdit',
  async ({ id, formData }: { id: CategoryType['id']; formData: AddCategoryFormData }) =>
    CategoriesService.editCategory(id, formData),
);

