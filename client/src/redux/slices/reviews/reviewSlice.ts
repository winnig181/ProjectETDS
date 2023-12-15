/* eslint-disable import/prefer-default-export */
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import {
  thunkReviewsLoad,
  // thunkNotesAdd,
  // thunkNotesDelete,
  // thunkNotesEdit,
  // thunkNotesEditIsFav,
} from './createAsyncThunk';
import type { ReviewSliceState } from '../../../types/review/review';

const initialState: ReviewSliceState = {
  reviews: [],
  // currentNote: null,
};

export const reviewsSlice = createSlice({
  name: 'reviews',
  initialState,
  reducers: {
    // setCurrentNote: (state, action: PayloadAction<NoteSliceState['currentNote']>) => {
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
    builder.addCase(thunkReviewsLoad.fulfilled, (state, action) => {
      state.reviews = action.payload;
    });
    builder.addCase(thunkReviewsLoad.rejected, (state, action) => {
      console.log(action.error);
    });

    // builder.addCase(thunkNotesAdd.fulfilled, (state, action) => {
    //   // применяем методы, мутирующие исходный массив
    //   state.notes.unshift(action.payload);
    // });
    // builder.addCase(thunkNotesDelete.fulfilled, (state, action) => {
    //   const noteIndex = state.notes.findIndex((note) => note.id === action.payload);
    //   if (noteIndex !== -1) {
    //     state.notes.splice(noteIndex, 1);
    //   }
    //   // state.currentNote = null;
    // });
    // builder.addCase(thunkNotesEdit.fulfilled, (state, action) => {
    //   const noteIndex = state.notes.findIndex((note) => note.id === action.payload.id);
    //   if (noteIndex !== -1) {
    //     state.notes[noteIndex] = action.payload;
    //   }
    // });
    // builder.addCase(thunkNotesEditIsFav.fulfilled, (state,action)=>{
    //   const noteIndex = state.notes.findIndex((note) => note.id === action.payload);
    //   if(noteIndex !== -1){
    //     state.notes[noteIndex].isFav = !state.notes[noteIndex].isFav;
    //   }
    // });
  },
});

// export const { setCurrentNote, clearCurrentNote } = notesSlice.actions;

export default reviewsSlice.reducer;
