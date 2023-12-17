import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { Button, Grid } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../redux/hook';
import { thunkLogout } from '../redux/slices/auth/createAsyncThunk';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function NavBar(): JSX.Element {

  const auth = useAppSelector((store) => store.authSlice);
  const { user } = auth;
  console.log('>>>>>>>>>>>>>>>auth', user);

  const dispatch = useAppDispatch();


  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ top: 0, backgroundColor: 'primary.main' }}>
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit" aria-label="open drawer" sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            <Typography variant="h6" fontWeight="bold">
              {user.status === 'authenticated' ? `Welcome, ${user.name} !` : 'Hello'}
            </Typography>
          </Typography>
          <Grid item>
          <Button color="inherit" component={NavLink} to="/lk">
              Личный кабинет
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
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
  );
}



/// ///////////////////////////////////////////////////////
// old navbar


// import React from 'react';
// import { AppBar, Toolbar, Typography, Button, Grid, Box } from '@mui/material';
// import { NavLink } from 'react-router-dom';
// import { useAppDispatch, useAppSelector } from '../redux/hook';
// import { thunkLogout } from '../redux/slices/auth/createAsyncThunk';
// import UserIcon from './Icons/Icon';

// export default function NavBar(): JSX.Element {
//   const auth = useAppSelector((store) => store.authSlice);
//   console.log('>>>>>>>>>>>>>>>auth', auth);
//   const { user } = auth;

//   const dispatch = useAppDispatch();

//   return (
//     <AppBar position="fixed" sx={{ top: 0, backgroundColor: 'primary.main' }}>
//       <Toolbar>
//         <Grid container justifyContent="space-around">
//           <Grid item display="flex" alignItems="center">
//             <Box sx={{ marginRight: '20px' }}>
//               <UserIcon />
//             </Box>
//             <Typography variant="h6" fontWeight="bold">
//               {user.status === 'authenticated' ? `Welcome, ${user.name} !` : 'Hello'}
//             </Typography>
//           </Grid>
//           <Grid item>
//           <Button color="inherit" component={NavLink} to="/lk">
//               Личный кабинет
//             </Button>
//             <Button color="inherit" sx={{ fontWeight: 'bold' }} component={NavLink} to="/">
//               Главная
//             </Button>
//           </Grid>
//           <Grid item>
//             <Button color="inherit" sx={{ fontWeight: 'bold' }} component={NavLink} to="/">
//               Главная
//             </Button>
//           </Grid>
//           <Grid item>
//             <Button color="inherit" sx={{ fontWeight: 'bold' }} component={NavLink} to="/">
//               Главная
//             </Button>
//           </Grid>
//           {user.status !== 'authenticated' ? (
//             <>
//               <Grid item>
//                 <Button color="inherit" sx={{ fontWeight: 'bold' }} component={NavLink} to="/login">
//                   Авторизация
//                 </Button>
//               </Grid>

//               <Grid item>
//                 <Button color="inherit" sx={{ fontWeight: 'bold' }} component={NavLink} to="/registration">
//                   Регистрация
//                 </Button>
//               </Grid>
//             </>
//           ) : (
//             <Grid item>
//               <Button color="inherit" sx={{ fontWeight: 'bold' }} onClick={() => void dispatch(thunkLogout())}>
//                 Выйти
//               </Button>
//             </Grid>
//           )}
//         </Grid>
//       </Toolbar>
//     </AppBar>
//   );
// }
