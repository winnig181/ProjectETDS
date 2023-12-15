import * as React from 'react';

import { Card, CardActions, Container, Grid } from '@mui/material';
import { useAppSelector } from '../../redux/hook';
import type { ReviewType } from '../../types/review/review';
import ReviewCard from './ReviewCard';

// type PropsLkCard = {
//   text: string;
// }

export default function MyReviewsList(): JSX.Element {
  const reviews = useAppSelector((state) => state.reviewsSlice);
  console.log('reviews',reviews)
  // const auth = useAppSelector((state) => state.authSlice.user);
  // const { user } = auth;
  console.log('>>>>user:', user);
  // const myReviews = reviews.filter((review) => userId === user.id);
  return (
    <Grid container spacing={1}>
      {myReviews.map((review: ReviewType) => (
        <Grid key={review.id} item xs={1}>
          <ReviewCard review={review} />
        </Grid>
      ))}
    </Grid>
  );
}
