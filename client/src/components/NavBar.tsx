import * as React from 'react';
import { styled, useTheme , alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import type { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import MuiAppBar from '@mui/material/AppBar';
import { NavLink , useNavigate } from 'react-router-dom';
import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';
import List from '@mui/material/List';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Menu from '@mui/material/Menu';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Avatar, Badge, Button, Grid, MenuItem, Tooltip } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../redux/hook';
import { thunkLogout } from '../redux/slices/auth/createAsyncThunk';

const drawerWidth = 240;

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

type AppBarProps = {
  open?: boolean;
} & MuiAppBarProps

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function NavBar(): JSX.Element {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const isMenuOpen = Boolean(anchorEl);
  // const deals = useAppSelector((state) => state.dealsSlice.deals);

  const auth = useAppSelector((store) => store.authSlice);
  const { user } = auth;

//   const myItemDealsCounter = deals.filter((deal) => deal.ownerId === user.id ).length
// const notificationsCounter = deals.length

  // console.log('все сделки -------------->', deals);
  // console.log('юзер-->', user.id)


  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
    console.log("clocked");
  };

  const handleMenuClose1 = () => {
    setAnchorEl(null);
    console.log("clocked");
  };

  const handleMenuClose2 = () => {
    setAnchorEl(null);
    console.log("clocked");
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >

   
<MenuItem onClick={handleMenuClose1}>
        <NavLink to="/lk/my-items" style={{ textDecoration: 'none', color: 'inherit' }}>
          Мои вещи
          {/* <Badge badgeContent={myItemDealsCounter} color="error">
            <Typography variant="body2" style={{ color: 'white', marginLeft: '5px' }}>
              {myItemDealsCounter}
            </Typography>
          </Badge> */}
        </NavLink>
      </MenuItem>
      <MenuItem onClick={handleMenuClose2}>
        <NavLink to="/lk/my-deals" style={{ textDecoration: 'none', color: 'inherit' }}>
        Запросы
          {/* <Badge badgeContent={notificationsCounter} color="error">
            <Typography variant="body2" style={{ color: 'white', marginLeft: '5px' }}>
              {notificationsCounter}
            </Typography>
          </Badge> */}
        </NavLink>
      </MenuItem>
    </Menu> 
  );


  const CustomButton = styled(Button)({
    backgroundColor: 'black', // Цвет фона по умолчанию
    color: 'white', // Цвет текста по умолчанию
    '&:hover': {
      backgroundColor: '#35cdce', // Цвет фона при наведении
    },
  });

  const dispatch = useAppDispatch();
  // const navigate = useNavigate();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>

          <img
  src="/img/002--1.png"
  alt="Hedgehog"
  width="55"
  height="55"
  style={{ borderRadius: '0%', marginRight: '20px', marginLeft: '20px' }}
/>

          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >

            <Typography variant="h6" fontWeight="bold">
              {user.status === 'authenticated' ? `Привет, ${user.name} !` : 'Hello'}
            </Typography>
          </Typography>
          <Grid item sx={{ ml: 2, mr: 2 }}>
          <CustomButton variant="contained" sx={{ fontWeight: 'bold' }} component={NavLink} to="/main">
              Категории
            </CustomButton>
          </Grid>
          <Grid item sx={{ ml: 2, mr: 2 }}>
          <CustomButton variant="contained" color="inherit" sx={{ fontWeight: 'bold' }} component={NavLink} to="/lk">
              Личный кабинет
            </CustomButton>
          </Grid>
          <Grid item sx={{ ml: 2, mr: 2 }}>
          <CustomButton variant="contained" color="inherit" sx={{ fontWeight: 'bold' }} component={NavLink} to="/goChat">
              Чат
            </CustomButton>
          </Grid>
          {/* <Grid item sx={{ ml: 2, mr: 2 }}>
          <CustomButton variant="contained" color="inherit" sx={{ fontWeight: 'bold' }} component={NavLink} to="/addDeal">
              Арендовать
            </CustomButton>
          </Grid> */}
          <Grid item sx={{ ml: 2, mr: 2 }}>
          <CustomButton variant="contained" sx={{ fontWeight: 'bold' }} component={NavLink} to="/add-item">
              Разместить
            </CustomButton>
          </Grid>
          {user.status !== 'authenticated' ? (
            <>
              <Grid item sx={{ ml: 2, mr: 2 }}>
              <CustomButton variant="contained" sx={{ fontWeight: 'bold' }} component={NavLink} to="/login">
                  Авторизация
                </CustomButton>
              </Grid>
              <Grid item sx={{ ml: 2, mr: 2 }}>
              <CustomButton variant="contained" sx={{ fontWeight: 'bold' }} component={NavLink} to="/registration">
                  Регистрация
                </CustomButton>
              </Grid>
            </>
          ) : (
            <Grid item sx={{ ml: 2, mr: 2 }}>
              <CustomButton variant="contained" sx={{ fontWeight: 'bold' }} onClick={() => 
              void dispatch(thunkLogout())
                // navigate('/login');}
              }
                >
                Выйти
              </CustomButton>
            </Grid>
          )}
          <Tooltip title="Open settings">
            <IconButton sx={{ p: 0, ml: 2, mr: 2 }}>
              <Avatar alt="Remy Sharp" src={user.avatar} />
            </IconButton>
          </Tooltip>

          <MenuItem>
            <IconButton onClick={handleProfileMenuOpen} size="large" aria-label="notification" color="inherit" >
              {/* <Badge badgeContent={notificationsCounter} color="error">
                <NotificationsIcon />
              </Badge> */}
            </IconButton>

           </MenuItem>

          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase placeholder="Search…" inputProps={{ 'aria-label': 'search' }} />
          </Search>
        </Toolbar>
        {renderMenu}
      </AppBar>

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            backgroundColor: '#2e2e2e'
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}>

<DrawerHeader>
  <Typography
    variant="h6"
    noWrap
    component="div"
    sx={{
      color: '#35cdce',
      textAlign: 'center',
      fontWeight: 'bold',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '28px', // добавим небольшой отступ между иконкой и текстом
    }}
  >
    ДоброЁж
    <IconButton onClick={handleDrawerClose}>
      {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
    </IconButton>
  </Typography>
</DrawerHeader>

        <List>
    
<CustomButton variant="contained" color="inherit" sx={{ fontWeight: 'bold', height: '60px' }} component={NavLink} to="/lk/profile" fullWidth>
      Личный профиль
    </CustomButton>
    
<CustomButton variant="contained" color="inherit" sx={{ fontWeight: 'bold', height: '60px' }} component={NavLink} to="/lk/my-items" fullWidth>
      Мои предметы
    </CustomButton>
    
<CustomButton variant="contained" color="inherit" sx={{ fontWeight: 'bold', height: '60px' }} component={NavLink} to="/lk/my-deals" fullWidth>
      Арендованные предметы
    </CustomButton>

    <CustomButton variant="contained" color="inherit" sx={{ fontWeight: 'bold', height: '60px' }} component={NavLink} to="/lk/reviews" fullWidth>
      Мои отзывы
    </CustomButton>

    <CustomButton variant="contained" color="inherit" sx={{ fontWeight: 'bold', height: '60px' }} component={NavLink} to="/lk/favourites" fullWidth>
      Избранное
    </CustomButton>
    {/* Добавьте остальные кнопки по аналогии */}
  </List>
      </Drawer>
    </Box>
  );
}
