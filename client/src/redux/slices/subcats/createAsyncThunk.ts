/* eslint-disable import/prefer-default-export */
import { createAsyncThunk } from '@reduxjs/toolkit';
import SubcatsService from '../../../services/subcatService';
import type { SubcatType } from '../../../types/subcategory';

export const thunkSubcatsLoad = createAsyncThunk('subcatsSlice/thunkDealsLoad', async (id: SubcatType['id']) =>
SubcatsService.getSubcats(id),
);

// export const thunkSubcatsAdd = createAsyncThunk(
//   'subcatsSlice/thunkSubcatsAdd',
//   async (formData: AddSubcatFormData) => SubcatsService.addSubcat(formData),
// );

// export const thunkSubcatsDelete = createAsyncThunk(
//   'subcatsSlice/thunkSubcatsDelete',
//   async (id: SubcatType['id']) => SubcatsService.deleteSubcat(id),
// );

// export const thunkSubcatsEdit = createAsyncThunk(
//   'subcatsSlice/thunkSubcatsEdit',
//   async ({ id, formData }: { id: SubcatType['id']; formData: AddSubcatFormData }) =>
//     SubcatsService.editSubcat(id, formData),
// );

