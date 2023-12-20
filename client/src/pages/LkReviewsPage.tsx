/* eslint-disable react/no-array-index-key */
import React, { useEffect } from 'react';
import { Container, Typography } from '@mui/material';

import MyReviewsList from '../components/lk/MyReviewsList';
import { useAppDispatch } from '../redux/hook';
import { thunkReviewsLoad } from '../redux/slices/reviews/createAsyncThunk';

export default function LkReviewsPage(): JSX.Element {
  const dispatch = useAppDispatch();
  useEffect(() => {
    void dispatch(thunkReviewsLoad());
  }, []);

  return (
    <Container sx={{ margin: 'auto' }}>
      <Typography
        variant="h5"
        component="div"
        style={{ marginTop: '40px',marginBottom: '40px'  }}
      >
        Мои отзывы на других пользователей
      </Typography>
      <MyReviewsList/>
    </Container>
  );
}
