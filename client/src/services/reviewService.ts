import axios from 'axios';
import type { ReviewType, AddReviewFormData } from '../types/review/review';

export const apiReviewsService = axios.create({
  // baseURL: 'http://localhost:3000/api/v1/products',
  baseURL:  `${import.meta.env.VITE_SERVER_BASEURL}reviews`,
});

class ReviewsService {
  static async getReviews(): Promise<ReviewType[]> {
    const response = await apiReviewsService.get<ReviewType[]>('/');
    if (response.status === 200) return response.data;
    return [];
  }

  static async addReview(ReviewFormData: AddReviewFormData): Promise<ReviewType> {
    const response = await apiReviewsService.post<ReviewType>('/', ReviewFormData);
    if (response.status === 201) return response.data;
    return Promise.reject(new Error('Server error adding Review'));
  }

  // static async deleteReview(id: ReviewType['id']): Promise<ReviewType['id']> {
  //   const response = await apiReviewsService.delete<ReviewType>(`/${id}`);
  //   if (response.status === 200) return id;
  //   return Promise.reject(new Error('Server error deleting Review'));
  // }

  // static async editReview(id: ReviewType['id'], reviewFormData: AddReviewFormData): Promise<ReviewType> {
  //   try {
  //     const response = await apiReviewsService.put<ReviewType>(`/${id}`, reviewFormData);
  //     if (response.status === 200) {
  //       return response.data;
  //     }
  //     throw new Error('Failed to update Review');
  //   } catch (error) {
  //     throw new Error('Server error editing Review');
  //   }
  // }


}

export default ReviewsService;
