/* eslint-disable react/no-array-index-key */
import React from 'react';
import { Container, Typography } from '@mui/material';
import MyItemsList from '../components/lk/MyItemsList';

export default function LkMyItemsPage(): JSX.Element {
  return (
    <Container>
      <Typography
        variant="h5"
        component="div"
        gutterBottom
        // color="textSecondary"
        style={{ marginTop: '40px',marginBottom: '40px' }}
      >
        Мои предметы
      </Typography>
      <MyItemsList />
    </Container>
  );
}
