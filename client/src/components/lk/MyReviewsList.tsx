import * as React from 'react';

import { Card, CardActions, Container, Grid } from '@mui/material';
import { useAppSelector } from '../../redux/hook';
import type { ReviewType } from '../../types/review/review';
import ReviewCard from './ReviewCard';
import type { UserType } from '../../types/auth';

// type PropsLkCard = {
//   text: string;
// }

export default function MyReviewsList(): JSX.Element {

  const auth = useAppSelector((state) => state.authSlice);
  let user:UserType;
  auth.user.status === 'authenticated' && (user = auth.user);
  
  console.log('>>>>auth:', auth);

  console.log('>>>>user:', user);
  const reviews = useAppSelector((state) => state.reviewsSlice.reviews);
  console.log('reviews',reviews)
  const myReviews = reviews.filter((review) => review.userId === user.id);
  return (
    <Grid container spacing={1}>
      {myReviews.map((review: ReviewType) => (
      
        <Grid key={review.id} item xs={12} sm={12} md={6}>
          <ReviewCard review={review} />
        </Grid>
      ))}
    </Grid>
  );
}
