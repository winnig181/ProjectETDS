/* eslint-disable react/jsx-no-useless-fragment */
import React, { useEffect } from 'react';
import {Box, Button, Container, Grid, styled, Typography} from '@mui/material';
import { NavLink } from 'react-router-dom';
import { useAppSelector } from '../redux/hook';

export default function HomePage(): JSX.Element {
  const auth = useAppSelector((store) => store.authSlice);

  return (
    <Container
      sx={{ backgroundColor: 'background.default', minHeight: '100vh', textAlign: 'center', alignItems:'center',
      display:'flex',flexDirection:'column' }}
    >
      <Grid style={{ height: '68px' }} />
      <Box>
      <Typography variant="h4" gutterBottom sx={{ lineHeight: '1.5', marginBottom: '25px' }}>
        Добро пожаловать на сайт ДоброЁж !
      </Typography>
      <Typography variant="h6" gutterBottom sx={{ lineHeight: '1.5', marginBottom: '50px' }}>
        Здесь Вы можете арендовать или предоставить в аренду
        <br />
        собственные вещи
      </Typography>

      {auth.user.status !== 'authenticated' ? (
        <Typography variant="body1" gutterBottom>
          Чтобы воспользоваться всеми возможностями сайта, необходимо <br />
          <Button
              variant="body1"
              gutterBottom
              component={NavLink}
              to="/login"
              style={{color: 'black', ':hover': { color: '#35cdce'}}} >
            {' '}
            пройти авторизацию{' '}
          </Button>
        </Typography>
      ) : (
        <Button component={NavLink} to="/main" variant="outlined">
          Выбрать интересующую категорию
        </Button>
      )}
      </Box>
      <Box
        component="video"
        width={256}
        height={256}
        preload="none"
        autoPlay
        loop
        muted
        playsInline
        sx={{
          marginTop: '50px',
          position: 'relative', // Needed for absolute positioning of controls
          ':hover': {
            '::-webkit-media-controls': {
              opacity: 1,
            },
            '::-webkit-media-controls-panel': {
              opacity: 1,
            },
            '::-webkit-media-controls-play-button': {
              opacity: 0, // Hide play button
            },
            '::-webkit-media-controls-timeline': {
              opacity: 0, // Hide timeline
            },
            '::-webkit-media-controls-current-time-display': {
              opacity: 0, // Hide current time
            },
            '::-webkit-media-controls-time-remaining-display': {
              opacity: 0, // Hide time remaining
            },
          },
          background: {
            '::-webkit-media-controls': {
              appearance: 'none',
              opacity: 0, // Hide controls by default
              position: 'absolute',
              width: '100%',
              height: '100%',
            },
            '::-webkit-media-controls-panel': {
              appearance: 'none',
              opacity: 0, // Hide controls by default
            },
            image: 'url("https://cdn-icons-png.flaticon.com/512/8793/8793286.png")',
            position: '50% 50%',
            size: 'fit',
            repeat: 'no-repeat',
          },
        }}
        // sx={{
        //   marginTop:'50px',
        //   background: {
        //     image: 'url("https://cdn-icons-png.flaticon.com/512/8793/8793286.png")',
        //     position: '50% 50%',
        //     size: 'fit',
        //     repeat: 'no-repeat',
        //   },
        // }}
      >
        <source src="https://cdn-icons-mp4.flaticon.com/512/8793/8793286.mp4" type="video/mp4" />

      </Box>
    </Container>
  );
}
