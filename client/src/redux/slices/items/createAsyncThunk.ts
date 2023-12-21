/* eslint-disable import/prefer-default-export */
import { createAsyncThunk } from '@reduxjs/toolkit';
import type { ItemType, AddItemFormData } from '../../../types/item/item';
import ItemsService from '../../../services/items';

export const thunkItemsLoad = createAsyncThunk('itemsSlice/thunkItemsLoad', async (id) =>
  ItemsService.getItems(id),
);

export const thunkItemsAdd = createAsyncThunk(
  'itemsSlice/thunkItemsAdd',
  async (formData: AddItemFormData) => ItemsService.addItem(formData),
);

// export const thunkItemsDelete = createAsyncThunk(
//   'itemsSlice/thunkItemsDelete',
//   async (id: ItemType['id']) => ItemsService.deleteItem(id),
// );
//
// export const thunkItemsEdit = createAsyncThunk(
//   'itemsSlice/thunkItemsEdit',
//   async ({ id, formData }: { id: ItemType['id']; formData: AddItemFormData }) =>
//     ItemsService.editItem(id, formData),
// );
//
// export const thunkItemsEditIsFav = createAsyncThunk(
//   'itemsSlice/thunkItemsEditIsFav',
//   async (id: ItemType['id']) =>
//     ItemsService.editIsFavItem(id),
// );
