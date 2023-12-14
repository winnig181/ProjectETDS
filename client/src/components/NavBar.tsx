import React from 'react';
import { AppBar, Toolbar, Typography, Button, Grid, Box } from '@mui/material';
import { NavLink } from 'react-router-dom';
import ReactIcon from './Icons/Icon';
import { useAppDispatch, useAppSelector } from '../redux/hook';
import { thunkLogout } from '../redux/slices/auth/createAsyncThunk';

export default function NavBar(): JSX.Element {
  const auth = useAppSelector((store) => store.authSlice);
  console.log('>>>>>>>>>>>>>>>auth', auth);
  const {user} = auth;

  const dispatch = useAppDispatch();

  return (
    <AppBar position="static" sx={{ backgroundColor: '#800080' }}>
      <Toolbar>
        <Grid container justifyContent="space-around">
          <Grid item display="flex">
            <Box sx={{ marginRight: '20px' }}>
              <ReactIcon />
            </Box>
            <Typography variant="h6">
              {user.status === 'authenticated' ? `Welcome, ${user.name} !` : 'Hello'}
            </Typography>
          </Grid>
          <Grid item>
            <Button color="inherit" component={NavLink} to="/">
              Главная
            </Button>
            <Button color="inherit" component={NavLink} to="/notes">
              Заметки
            </Button>
            <Button color="inherit" component={NavLink} to="/fav">
              Избранное
            </Button>
            {user.status !== 'authenticated' ? (
              <>
                <Button color="inherit" component={NavLink} to="/login">
                  Авторизация
                </Button>
                <Button color="inherit" component={NavLink} to="/registration">
                  Регистрация
                </Button>
              </>
            ) : (
              <Button color="inherit" onClick={() => void dispatch(thunkLogout())}>
                Выйти
              </Button>
            )}
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
