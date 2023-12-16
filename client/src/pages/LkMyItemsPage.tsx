/* eslint-disable react/no-array-index-key */
import React from 'react';
import { Container, Typography } from '@mui/material';
import MyItemsList from '../components/lk/MyItemsList';

export default function LkPage(): JSX.Element {
  return (
    <Container sx={{marginTop:50 }}>
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
