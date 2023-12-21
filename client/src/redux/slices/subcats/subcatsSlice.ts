import { createSlice } from '@reduxjs/toolkit';
import {
  thunkSubcatsLoad,
} from './createAsyncThunk';
import type { SubcatSliceState } from '../../../types/subcategory';

const initialState: SubcatSliceState = {
  subcats: [],
};

export const subcatsSlice = createSlice({
  name: 'subcats',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(thunkSubcatsLoad.fulfilled, (state, action) => {
      state.subcats = action.payload;
    });
    builder.addCase(thunkSubcatsLoad.rejected, (state, action) => {
      console.log(action.error);
    });
  },
});


export default subcatsSlice.reducer;
