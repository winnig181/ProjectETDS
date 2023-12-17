import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Rating } from '@mui/material';
import { format } from 'date-fns'; 
import { ru } from 'date-fns/locale'; 
import type { ReviewType } from '../../types/review/review';

type PropsReviewCard = {
  review: ReviewType;
}

export default function ReviewCard({review}: PropsReviewCard):JSX.Element {
  const formattedDate = format(new Date(review.createdAt), 'd MMMM yyyy', { locale: ru });
  console.log(review);
  const target = review.User;
  

  return (
    <Card variant="outlined" sx={{ minWidth: 400, minHeight:200 }}>
    <CardContent>
    <Rating name="read-only" value={review.rating} readOnly />
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Дата отзыва: {formattedDate}
      </Typography>
      <Typography variant="h6" component="div">
        о пользователе: {target?.name}
      </Typography>
      <Typography variant="body2">
      {review.review}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Удалить отзыв</Button>
    </CardActions>
  </Card >
  );
}