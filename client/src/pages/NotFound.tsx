/* eslint-disable react/jsx-no-useless-fragment */
import React from 'react';
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { useAppSelector } from '../redux/hook';

export default function NotFound(): JSX.Element {
 return (
    <Container
      sx={{ backgroundColor: 'background.default', minHeight: '100vh', textAlign: 'center', alignItems:'center', 
      display:'flex',flexDirection:'column' }}
    >
      <Grid style={{ height: '68px' }} />
      <Box> 
      <Typography variant="h2" gutterBottom sx={{ lineHeight: '2', marginBottom: '25px' }}>
        404
      </Typography>
      <Typography variant="h6" gutterBottom sx={{ lineHeight: '2', marginBottom: '50px' }}>
        К сожалению, запрашиваемая Вами страница не найдена <br />
        Попробуйте воспользоваться поиском
      </Typography>

      </Box>
      <Box>
        <img src="https://cdn-icons-png.flaticon.com/512/8794/8794464.png" width="128" height="128" alt="Ежик" title="Ежик"/>
      </Box>
    </Container>
  )
}