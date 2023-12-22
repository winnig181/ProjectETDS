import type { UserType } from "../auth";

export type ReviewType = {
  id: number;
  userId: number;
  targetId: number;
  title: string;
  review: string;
  rating: number;
  isFav: boolean;
  createdAt: Date;
  updatedAt: Date;
  User?:UserType;
};

export type AddReviewFormData = {
  review: string;
  rating: number;
  userId: number;
  targetId: number;
};

export type ReviewsState = {
  reviews: ReviewType[];
};

export type ReviewSliceState = {
  reviews: ReviewType[];
  // currentReview: ReviewType | null;
};