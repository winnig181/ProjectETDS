/* eslint-disable react/no-array-index-key */
import React from 'react';
import { Container, Typography } from '@mui/material';

import MyReviewsList from '../components/lk/MyReviewsList';

export default function LkPage(): JSX.Element {
  return (
    <Container sx={{ margin: 'auto' }}>
      <Typography
        variant="h5"
        component="div"
        gutterBottom
        // color="textSecondary"
        style={{ marginTop: '40px' }}
      >
        Мои отзывы на других пользователей
      </Typography>
      <MyReviewsList />
    </Container>
  );
}
