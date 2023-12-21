/* eslint-disable import/prefer-default-export */
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import {
  thunkItemsAdd,
  thunkItemsLoad,
  // thunkNotesDelete,
  // thunkNotesEdit,
  // thunkNotesEditIsFav,
} from './createAsyncThunk';
import type { ItemSliceState, ItemType } from '../../../types/item/item';

const initialState: ItemSliceState = {
  items: [],
  currentItem: null,
  favItems:[],
};

export const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    setCurrentItem: (state, action: PayloadAction<ItemSliceState['currentItem']>) => {
      state.currentItem = action.payload;
    },
    clearCurrentItem: (state) => {
      state.currentItem = null;
    },
    addFavItem:(state,action:PayloadAction<ItemType>)=>{
      state.favItems.push(action.payload);
    },
    delFavItem:(state, action:PayloadAction<ItemType['id']>)=>{
      const favItemIndex = state.favItems.findIndex((el)=>el.id === action.payload);
      if(favItemIndex !== -1){
        state.favItems.splice(favItemIndex, 1);
      }      
    }
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

    builder.addCase(thunkItemsAdd.fulfilled, (state, action) => {
      // применяем методы, мутирующие исходный массив
      state.items.unshift(action.payload);
    });

    // builder.addCase(thunkItemsDelete.fulfilled, (state, action) => {
    //   const itemIndex = state.items.findIndex((note) => note.id === action.payload);
    //   if (itemIndex !== -1) {
    //     state.items.splice(itemIndex, 1);
    //   }
    //   // state.currentNote = null;
    // });
    // builder.addCase(thunkItemsEdit.fulfilled, (state, action) => {
    //   const itemIndex = state.items.findIndex((note) => note.id === action.payload.id);
    //   if (itemIndex !== -1) {
    //     state.items[itemIndex] = action.payload;
    //   }
    // });
    // builder.addCase(thunkItemsEditIsFav.fulfilled, (state,action)=>{
    //   const itemIndex = state.items.findIndex((note) => note.id === action.payload);
    //   if(itemIndex !== -1){
    //     state.items[itemIndex].isFav = !state.items[itemIndex].isFav;
    //   }
    // });
  },
});

export const { setCurrentItem, clearCurrentItem, addFavItem,delFavItem  } = itemsSlice.actions;

export default itemsSlice.reducer;
