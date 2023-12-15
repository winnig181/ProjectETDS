/* eslint-disable import/prefer-default-export */
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import {
  thunkItemsLoad,
  thunkNotesAdd,
  thunkNotesDelete,
  thunkNotesEdit,
  thunkNotesEditIsFav,
} from './createAsyncThunk';
import type { ItemSliceState } from '../../../types/item/item';

const initialState: ItemSliceState = {
  items: [],
  // currentItem: null,
};

export const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    // setCurrentNote: (state, action: PayloadAction<itemsliceState['currentNote']>) => {
    //   state.currentNote = action.payload;
    // },
    // clearCurrentNote: (state) => {
    //   state.currentNote = null;
    // },
    // addProducts: (state, action: PayloadAction<ProductType>) => {
    //   state.products.unshift(action.payload);
    // },
    // deleteProduct: (state, action: PayloadAction<ProductType['id']>) => {
    //   const targetIndex = state.products.findIndex((product) => product.id === action.payload);
    //   if (targetIndex !== -1) {
    //     state.products.splice(targetIndex, 1);
    //   }
    // },
  },
  extraReducers(builder) {
    builder.addCase(thunkItemsLoad.fulfilled, (state, action) => {
      state.items = action.payload;
    });
    builder.addCase(thunkItemsLoad.rejected, (state, action) => {
      console.log(action.error);
    });

    // builder.addCase(thunkitemsAdd.fulfilled, (state, action) => {
    //   // применяем методы, мутирующие исходный массив
    //   state.items.unshift(action.payload);
    // });
    // builder.addCase(thunkitemsDelete.fulfilled, (state, action) => {
    //   const itemIndex = state.items.findIndex((note) => note.id === action.payload);
    //   if (itemIndex !== -1) {
    //     state.items.splice(itemIndex, 1);
    //   }
    //   // state.currentNote = null;
    // });
    // builder.addCase(thunkitemsEdit.fulfilled, (state, action) => {
    //   const itemIndex = state.items.findIndex((note) => note.id === action.payload.id);
    //   if (itemIndex !== -1) {
    //     state.items[itemIndex] = action.payload;
    //   }
    // });
    // builder.addCase(thunkitemsEditIsFav.fulfilled, (state,action)=>{
    //   const itemIndex = state.items.findIndex((note) => note.id === action.payload);
    //   if(itemIndex !== -1){
    //     state.items[itemIndex].isFav = !state.items[itemIndex].isFav;
    //   }
    // });
  },
});

// export const { setCurrentNote, clearCurrentNote } = itemsSlice.actions;

export default itemsSlice.reducer;
