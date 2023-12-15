import * as React from 'react';

import Typography from '@mui/material/Typography';
import { Box, Button, Card, CardMedia, Container, Grid } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { useAppSelector } from '../../redux/hook';

// type PropsLkCard = {
//   text: string;
// }

export default function LkProfile(): JSX.Element {
  const user = useAppSelector((state) => state.authSlice.user);
  console.log('user', user);
  const {
    name,
    nickName,
    email,
    phone,
    avatar,
    city,
    metro,
    publicPhone,
    isActivated,
    activationLink,
  } = user;
  return (
    <Container>
      <Card sx={{ display: 'flex' }}>
        {/* Надо сделать ширину 30% контейнера на 70% */}
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <CardMedia
            component="img"
            sx={{ width: 100 }}
            image="/public/img/vite.svg"
            alt="avatar"
          />
          <Button size="small" color="primary">
            Загрузить фото
          </Button>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Typography
            variant="h6"
            component="div"
            gutterBottom
            color="textSecondary"
            style={{ marginTop: '40px' }}
          >
            Учетные данные
          </Typography>
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            <Grid item xs={2} sm={6} md={6}>
              <p>Имя: {name}</p>
            </Grid>
            <Grid item xs={2} sm={6} md={6}>
              <p>Email: {email}</p>
            </Grid>
            <Grid item xs={2} sm={6} md={6}>
              <p>
                {isActivated
                  ? 'Email подтвержден'
                  : `Ссылка для подтверждения имейла:<p>${activationLink}</p>`}
              </p>
            </Grid>
            <Grid item xs={2} sm={6} md={6}>
              <p>Тел.: {phone}</p>
            </Grid>
            <Grid item xs={2} sm={6} md={6}>
              <NavLink to="#">
                <p>Изменить пароль </p>
              </NavLink>
            </Grid>
          </Grid>

          <Typography
            variant="h6"
            component="div"
            gutterBottom
            color="textSecondary"
            style={{ marginTop: '40px' }}
          >
            Публичные данные
          </Typography>
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            <Grid item xs={2} sm={6} md={6}>
              <p>Ник: {nickName}</p>
            </Grid>
            <Grid item xs={2} sm={6} md={6}>
              <p>Email: {email}</p>
            </Grid>
            <Grid item xs={2} sm={6} md={6}>
              <p>Тел.: {publicPhone || phone}</p>
            </Grid>
            <Grid item xs={2} sm={6} md={6}>
              <p>Город: {city}</p>
            </Grid>
            <Grid item xs={2} sm={6} md={6}>
              <p>Станция метро: {metro}</p>
            </Grid>
          </Grid>
        </Box>
      </Card>
    </Container>
  );
}
