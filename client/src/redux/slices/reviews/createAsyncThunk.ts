/* eslint-disable import/prefer-default-export */
import { createAsyncThunk } from '@reduxjs/toolkit';
import type { ReviewType, AddReviewFormData } from '../../../types/review/review';
import ReviewsService from '../../../services/reviewService';

export const thunkReviewsLoad = createAsyncThunk('reviewsSlice/thunkReviewsLoad', async () =>
  ReviewsService.getReviews(),
);

export const thunkReviewsAdd = createAsyncThunk(
  'reviewsSlice/thunkReviewsAdd',
  async (formData: AddReviewFormData) => ReviewsService.addReview(formData),
);

// export const thunkReviewsEdit = createAsyncThunk(
//   'reviewsSlice/thunkReviewsEdit',
//   async ({ id, formData }: { id: ReviewType['id']; formData: AddReviewFormData }) =>
//   ReviewsService.editReview(id, formData),
//   );
  
//   export const thunkReviewsDelete = createAsyncThunk(
//     'reviewsSlice/thunkReviewsDelete',
//     async (id: ReviewType['id']) => ReviewsService.deleteReview(id),
//   );
  
  