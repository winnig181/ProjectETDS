/* eslint-disable import/prefer-default-export */
import { createAsyncThunk } from '@reduxjs/toolkit';
import OwnerDealsService from '../../../services/ownerdeals';
import type { DealType } from '../../../types/deal/deal';

export const thunkOwnerDealsLoad = createAsyncThunk('ownerDealsSlice/thunkOwnerDealsLoad', async () =>
  OwnerDealsService.getOwnerDeals(),
);

export const thunkOwnerApproveDeal = createAsyncThunk(
  'ownerDealsSlice/thunkOwnerApproveDeal',
  async (id: DealType['id']) =>
  OwnerDealsService.ownerApproveDeal(id),
);

// export const thunkDealsAdd = createAsyncThunk(
//   'dealsSlice/thunkDealsAdd',
//   async (formData: AddDealFormData) => DealsService.addDeal(formData),
// );

// export const thunkOwnerDealsDelete = createAsyncThunk(
//   'dealsSlice/thunkDealsDelete',
//   async (id: DealType['id']) => DealsService.deleteDeal(id),
// );

// export const thunkOwnerDealsEdit = createAsyncThunk(
//   'dealsSlice/thunkDealsEdit',
//   async ({ id, formData }: { id: DealType['id']; formData: AddDealFormData }) =>
//     DealsService.editDeal(id, formData),
// );


