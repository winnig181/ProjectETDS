/* eslint-disable import/prefer-default-export */
import { createSlice } from '@reduxjs/toolkit';
import type { AuthSliceState } from '../../../types/auth/index';
import { thunkLogin , thunkSignUp , thunkLogout , thunkAuthRefresh, thunkCheckAuth } from './createAsyncThunk';

const initialState: AuthSliceState = { user: { status: 'pending' }, accessToken: '' };
const guestState: AuthSliceState = { user: { status: 'guest' }, accessToken: '' };

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(thunkLogin.fulfilled, (state, action) => action.payload);
    builder.addCase(thunkLogin.rejected, (state, action) => guestState);

    builder.addCase(thunkSignUp.fulfilled, (state, action) => action.payload);
    builder.addCase(thunkSignUp.rejected, (state, action) => guestState);

    builder.addCase(thunkLogout.fulfilled, (state, action) => guestState);

    builder.addCase(thunkAuthRefresh.fulfilled, (state, action) => action.payload);
    builder.addCase(thunkAuthRefresh.rejected, (state, action) => guestState);
    
    builder.addCase(thunkCheckAuth.fulfilled, (state, action) => action.payload);
     // Можно сделать гостя, если отвалилось
    builder.addCase(thunkCheckAuth.rejected, (state, action) => guestState);
  },
});
export default authSlice.reducer;
