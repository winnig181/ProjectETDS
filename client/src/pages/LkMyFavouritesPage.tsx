import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import MyFavsList from '../components/lk/MyFavsList';

// type Props = {}

export default function LkMyFavouritesPage(): JSX.Element {
  return (
    <Container>
      <Typography
            variant="h4"
            sx={{ alignSelf: 'center', marginBottom: '30px', paddingTop: '30px' }}
          >
        {' '}
        Избранные позиции {' '}
      </Typography>
      {/* <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }} > */}
      <MyFavsList />

      {/* </Box> */}
      
    </Container>
  );
}
