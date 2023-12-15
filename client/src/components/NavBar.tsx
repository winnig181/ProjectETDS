import React from 'react';
import { AppBar, Toolbar, Typography, Button, Grid, Box } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../redux/hook';
import { thunkLogout } from '../redux/slices/auth/createAsyncThunk';
import UserIcon from './Icons/Icon';

export default function NavBar(): JSX.Element {
  const auth = useAppSelector((store) => store.authSlice);
  console.log('>>>>>>>>>>>>>>>auth', auth);
  const { user } = auth;

  const dispatch = useAppDispatch();

  return (
    <AppBar position="fixed" sx={{ top: 0, backgroundColor: 'primary.main' }}>
      <Toolbar>
        <Grid container justifyContent="space-around">
          <Grid item display="flex" alignItems="center">
            <Box sx={{ marginRight: '20px' }}>
              <UserIcon />
            </Box>
            <Typography variant="h6" fontWeight="bold">
              {user.status === 'authenticated' ? `Welcome, ${user.name} !` : 'Hello'}
            </Typography>
          </Grid>
          <Grid item>
          <Button color="inherit" component={NavLink} to="/lk">
              Личный кабинет
            </Button>
            <Button color="inherit" sx={{ fontWeight: 'bold' }} component={NavLink} to="/">
              Главная
            </Button>
          </Grid>
          <Grid item>
            <Button color="inherit" sx={{ fontWeight: 'bold' }} component={NavLink} to="/">
              Главная
            </Button>
          </Grid>
          <Grid item>
            <Button color="inherit" sx={{ fontWeight: 'bold' }} component={NavLink} to="/">
              Главная
            </Button>
          </Grid>
          {user.status !== 'authenticated' ? (
            <>
              <Grid item>
                <Button color="inherit" sx={{ fontWeight: 'bold' }} component={NavLink} to="/login">
                  Авторизация
                </Button>
              </Grid>

              <Grid item>
                <Button color="inherit" sx={{ fontWeight: 'bold' }} component={NavLink} to="/registration">
                  Регистрация
                </Button>
              </Grid>
            </>
          ) : (
            <Grid item>
              <Button color="inherit" sx={{ fontWeight: 'bold' }} onClick={() => void dispatch(thunkLogout())}>
                Выйти
              </Button>
            </Grid>
          )}
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
