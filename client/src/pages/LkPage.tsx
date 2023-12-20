/* eslint-disable react/no-array-index-key */
import Grid from '@mui/material/Grid';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Tilt } from 'react-tilt';
import LkCard from '../components/lk/LkCard';

const defaultOptions = {
	reverse:        false,  // reverse the tilt direction
	max:            35,     // max tilt rotation (degrees)
	perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
	scale:          1.1,    // 2 = 200%, 1.5 = 150%, etc..
	speed:          1000,   // Speed of the enter/exit transition
	transition:     true,   // Set a transition on enter/exit.
	axis:           null,   // What axis should be disabled. Can be X or Y.
	reset:          true,    // If the tilt effect has to be reset on exit.
	easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
}

export default function LkPage(): JSX.Element {
  return (
    
    <Grid container rowSpacing={2} columnSpacing={4} justifyContent="center">
      <Grid item xs={12} sm={6} md={4}>
      <Tilt options={defaultOptions} style={{ height: 150, width: 250 }}>
        <NavLink to="/lk/profile">
          <LkCard text="Личный профиль" />
        </NavLink>
        </Tilt>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
      <Tilt options={defaultOptions} style={{ height: 150, width: 250 }}>
        <NavLink to="/lk/my-items">
          <LkCard text="Мои предметы" />
        </NavLink>
        </Tilt>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
      <Tilt options={defaultOptions} style={{ height: 150, width: 250 }}>
        <NavLink to="/lk/my-deals">
          <LkCard text="Арендованные предметы" />
        </NavLink>
      </Tilt>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
      <Tilt options={defaultOptions} style={{ height: 150, width: 250 }}>
        <NavLink to="/lk/reviews">
          <LkCard text="Мои отзывы" />
        </NavLink>
        </Tilt>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
      <Tilt options={defaultOptions} style={{ height: 150, width: 250 }}>
        <NavLink to="/lk/favourites">
          <LkCard text="Избранное" />
        </NavLink>
        </Tilt>
      </Grid>
    </Grid>
  );
}
