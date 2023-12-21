/* eslint-disable import/prefer-default-export */
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import {
  thunkOwnerDealsLoad,
  thunkOwnerApproveDeal,
  // thunkDealsAdd,
  // thunkDealsDelete,
  // thunkDealsEdit,
} from './createAsyncThunk';
import type { OwnerDealSliceState } from '../../../types/deal/deal';

const initialState: OwnerDealSliceState = {
  ownerdeals: [],
  currentOwnerDeal: null,
};

export const ownerDealsSlice = createSlice({
  name: 'ownerdeals',
  initialState,
  reducers: {
    setCurrentOwnerDeal: (
      state,
      action: PayloadAction<OwnerDealSliceState['currentOwnerDeal']>,
    ) => {
      state.currentOwnerDeal = action.payload;
    },
    clearCurrentOwnerDeal: (state) => {
      state.currentOwnerDeal = null;
    },
  },
  extraReducers(builder) {
    builder.addCase(thunkOwnerDealsLoad.fulfilled, (state, action) => {
      state.ownerdeals = action.payload;
    });
    builder.addCase(thunkOwnerDealsLoad.rejected, (state, action) => {
      console.log(action.error);
    });
    builder.addCase(thunkOwnerApproveDeal.fulfilled, (state, action) => {
      const dealIndex = state.ownerdeals.findIndex((deal) => deal.id === action.payload);
      if (dealIndex !== -1) {
        state.ownerdeals[dealIndex].ownerApproveDeal = true;
      }
    });

    // builder.addCase(thunkDealsAdd.fulfilled, (state, action) => {
    //   // применяем методы, мутирующие исходный массив
    //   state.deals.unshift(action.payload);
    // });
    // builder.addCase(thunkOwnerDealsDelete.fulfilled, (state, action) => {
    //   const itemIndex = state.deals.findIndex((note) => note.id === action.payload);
    //   if (itemIndex !== -1) {
    //     state.deals.splice(itemIndex, 1);
    //   }
    //   // state.currentDeal = null;
    // });
    // builder.addCase(thunkOwnerDealsEdit.fulfilled, (state, action) => {
    //   const itemIndex = state.deals.findIndex((note) => note.id === action.payload.id);
    //   if (itemIndex !== -1) {
    //     state.deals[itemIndex] = action.payload;
    //   }
    // });
  },
});

export const { setCurrentOwnerDeal, clearCurrentOwnerDeal } = ownerDealsSlice.actions;

export default ownerDealsSlice.reducer;
