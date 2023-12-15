import React from 'react';
import { Drawer, List, ListItem, ListItemButton, ListItemText, Typography, Box } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../redux/hook';
import { thunkLogout } from '../redux/slices/auth/createAsyncThunk';
import UserIcon from './Icons/Icon';

export default function Sidebar(): JSX.Element {
  const auth = useAppSelector((store) => store.authSlice);
  const { user } = auth;

  const dispatch = useAppDispatch();

  return (
    <Drawer variant="permanent" sx={{ width: 240, flexShrink: 0, zIndex: 0 }}>
      <Box sx={{ width: 240, marginTop: '64px', transition: 'margin .2s ease-out' }}>
        <Typography variant="h6" align="center" fontWeight="bold" p={2}>
          {user.status === 'authenticated' ? `Welcome, ${user.name} !` : 'Hello'}
        </Typography>
        <List>
          <ListItem component={NavLink} to="/" button>
            <ListItemText primary="Главная" />
          </ListItem>
          <ListItem component={NavLink} to="/" button>
            <ListItemText primary="Главная" />
          </ListItem>
          <ListItem component={NavLink} to="/" button>
            <ListItemText primary="Главная" />
          </ListItem>
        </List>
        {user.status !== 'authenticated' && (
          <List>
            <ListItem component={NavLink} to="/login" button>
              <ListItemText primary="Авторизация" />
            </ListItem>
            <ListItem component={NavLink} to="/registration" button>
              <ListItemText primary="Регистрация" />
            </ListItem>
          </List>
        )}
        {user.status === 'authenticated' && (
          <List>
            <ListItem button onClick={() => void dispatch(thunkLogout())}>
              <ListItemText primary="Выйти" />
            </ListItem>
          </List>
        )}
      </Box>
    </Drawer>
  );
}
