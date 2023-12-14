import { configureStore } from '@reduxjs/toolkit';
import noteReducer from './slices/notes/notesSlice';
import authReducer from './slices/auth/authSlice';

export const store = configureStore({
  reducer: {
    notesSlice: noteReducer,
    authSlice: authReducer,

    reviewsSlice: reviewReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
