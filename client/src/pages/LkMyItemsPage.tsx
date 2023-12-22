/* eslint-disable react/no-array-index-key */
import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import MyItemsList from '../components/lk/MyItemsList';
import ModalUserInfo from '../components/ModalUserInfo';
import MyOwnersDealsList from '../components/lk/MyOwnersDealsList';

export default function LkMyItemsPage(): JSX.Element {
  return (
    <Container>
      <Typography
        variant="h4"
        gutterBottom
        style={{ marginTop: '40px', marginBottom: '5px' }}
      >
        {' '}
        Мои предметы{' '}
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <Typography
          variant="h5"
          gutterBottom
          style={{ marginTop: '20px', marginBottom: '5px' }}
        >
          Последние сделки
        </Typography>
        <MyOwnersDealsList />
        <MyItemsList />
      </Box>
      <ModalUserInfo />
    </Container>
  );
}
