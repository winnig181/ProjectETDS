/* eslint-disable import/prefer-default-export */
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import {
  thunkDealsAdd,
  thunkDealsLoad,
  // thunkDealsAdd,
  // thunkDealsDelete,
  // thunkDealsEdit,
} from './createAsyncThunk';
import type { DealSliceState } from '../../../types/deal/deal';

const initialState: DealSliceState = {
  deals: [],
  // currentItem: null,
};

export const dealsSlice = createSlice({
  name: 'deals',
  initialState,
  reducers: {
    // setCurrentDeal: (state, action: PayloadAction<DealSliceState['currentDeal']>) => {
    //   state.currentDeal = action.payload;
    // },
    // clearCurrentDeal: (state) => {
    //   state.currentDeal = null;
    // },
    // addDeal: (state, action: PayloadAction<DealType>) => {
    //   state.deals.unshift(action.payload);
    // },
    // deleteProduct: (state, action: PayloadAction<DealType['id']>) => {
    //   const targetIndex = state.products.findIndex((deal) => deal.id === action.payload);
    //   if (targetIndex !== -1) {
    //     state.deals.splice(targetIndex, 1);
    //   }
    // },
  },
  extraReducers(builder) {
    builder.addCase(thunkDealsLoad.fulfilled, (state, action) => {
      state.deals = action.payload;
    });
    builder.addCase(thunkDealsLoad.rejected, (state, action) => {
      console.log(action.error);
    });

    builder.addCase(thunkDealsAdd.fulfilled, (state, action) => {
      // применяем методы, мутирующие исходный массив
      state.deals.unshift(action.payload);
    });
    // builder.addCase(thunkDealsDelete.fulfilled, (state, action) => {
    //   const itemIndex = state.deals.findIndex((note) => note.id === action.payload);
    //   if (itemIndex !== -1) {
    //     state.deals.splice(itemIndex, 1);
    //   }
    //   // state.currentDeal = null;
    // });
    // builder.addCase(thunkDealsEdit.fulfilled, (state, action) => {
    //   const itemIndex = state.deals.findIndex((note) => note.id === action.payload.id);
    //   if (itemIndex !== -1) {
    //     state.deals[itemIndex] = action.payload;
    //   }
    // });
  },
});

// export const { setCurrentDeal, clearCurrentDeal } = dealsSlice.actions;

export default dealsSlice.reducer;
