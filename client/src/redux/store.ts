import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/auth/authSlice';
import reviewReducer from './slices/reviews/reviewSlice';
import itemReducer from './slices/items/itemsSlice';
import dealReducer from './slices/deals/dealsSlice';
import subcatReducer from './slices/subcats/subcatsSlice';

export const store = configureStore({
  reducer: {
    authSlice: authReducer,

    itemsSlice: itemReducer,
    reviewsSlice: reviewReducer,
    dealsSlice: dealReducer,
    subcatsSlice: subcatReducer,

  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
