/* eslint-disable react/no-array-index-key */
import Grid from '@mui/material/Grid';
import React from 'react';
import { NavLink } from 'react-router-dom';
import LkCard from '../components/lk/LkCard';

export default function LkPage(): JSX.Element {
  return (
    
    <Grid container rowSpacing={2} columnSpacing={4} justifyContent="center">
      <Grid item xs={12} sm={6} md={4}>
        <NavLink to="/lk/profile">
          <LkCard text="Личный профиль" />
        </NavLink>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <NavLink to="/lk/my-items">
          <LkCard text="Мои предметы" />
        </NavLink>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <NavLink to="/lk/my-deals">
          <LkCard text="Мои сделки" />
        </NavLink>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <NavLink to="/lk/favourites">
          <LkCard text="Избранное" />
        </NavLink>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <NavLink to="/lk/reviews">
          <LkCard text="Мои отзывы" />
        </NavLink>
      </Grid>
    </Grid>
  );
}
