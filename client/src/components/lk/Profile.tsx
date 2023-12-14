import * as React from 'react';

import Typography from '@mui/material/Typography';
import { Card, CardActions, Container, Grid } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { useAppSelector } from '../../redux/hook';

// type PropsLkCard = {
//   text: string;
// }

export default function Profile():JSX.Element {
  const user = useAppSelector((state)=>state.authSlice.user);
  const {name, nickName, email, phone, avatar, city, metro, publicPhone} = user;
  return (
    <Container>
      <Typography variant="h6" component="div" gutterBottom color="textSecondary" style={{ marginTop: '40px' }}>
       Учетные данные
      </Typography>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      <Grid item xs={2} sm={6} md={6} >
          <p>Имя: {name}</p>
      </Grid>
      <Grid item xs={2} sm={6} md={6} >
          <p>Email: {email}</p>
      </Grid>
      <Grid item xs={2} sm={6} md={6} >
          <p>Тел.: {phone}</p>
      </Grid>
      <Grid item xs={2} sm={6} md={6} >
        <NavLink to="#">
          <p>Изменить пароль </p>
        </NavLink>
      </Grid>
      </Grid>

      <Typography variant="h6" component="div" gutterBottom color="textSecondary" style={{ marginTop: '40px' }}>
       Публичные данные
      </Typography> 
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      <Grid item xs={2} sm={6} md={6} >
          <p>Ник: {nickName}</p>
      </Grid>
      <Grid item xs={2} sm={6} md={6} >
          <p>Email: {email}</p>
      </Grid>
      <Grid item xs={2} sm={6} md={6} >
          <p>Тел.: {publicPhone || phone}</p>
      </Grid>
      <Grid item xs={2} sm={6} md={6} >
          <p>Город: {city}</p>
      </Grid>
      <Grid item xs={2} sm={6} md={6} >
          <p>Станция метро: {metro}</p>
      </Grid>
      </Grid>

    </Container>

  );
}