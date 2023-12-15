/* eslint-disable react/no-array-index-key */
import React from 'react';
import { Container, Typography } from '@mui/material';
import MyItemsList from '../components/lk/MyItemsList';

export default function LkPage(): JSX.Element {
  return (
    <Container sx={{ margin: 'auto', marginTop:'20px' }}>
      <Typography
        variant="h5"
        component="div"
        gutterBottom
        // color="textSecondary"
        style={{ marginTop: '40px' }}
      >
        Мои предметы
      </Typography>
      <MyItemsList />
    </Container>
  );
}
