import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/auth/authSlice';
import reviewReducer from './slices/reviews/reviewSlice';
import itemReducer from './slices/items/itemsSlice';
import dealReducer from './slices/deals/dealsSlice';
import categoriesReducer from './slices/categories/categoriesSlice'
import subcatReducer from './slices/subcats/subcatsSlice';
import ownerDealReducer from './slices/ownerdeals/ownerDealsSlice';
import postReducer from './slices/posts/postSlice';

export const store = configureStore({
  reducer: {
    authSlice: authReducer,
    categoriesSlice: categoriesReducer,
    itemsSlice: itemReducer,
    reviewsSlice: reviewReducer,
    dealsSlice: dealReducer,
    ownerDealsSlice: ownerDealReducer,
    subcatsSlice: subcatReducer,
    postSlice: postReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
