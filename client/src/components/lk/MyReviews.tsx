import * as React from 'react';

import Typography from '@mui/material/Typography';
import { Card, CardActions, Container, Grid } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { useAppSelector } from '../../redux/hook';

// type PropsLkCard = {
//   text: string;
// }

export default function Profile():JSX.Element {
  const reviews = useAppSelector((state)=>state.reviewsSlice);
  const auth = useAppSelector((state)=>state.authSlice.user);
  const {user} = auth;
  const myReviews = reviews.filter((review)=>userId===user.id)
  return (
    <Container>
      {myReviews.map((el)=> 
      <ReviewCard key={el.id} review={el} />)}


    </Container>

  );
}