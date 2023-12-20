// import * as React from 'react';
// import { styled, alpha } from '@mui/material/styles';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import InputBase from '@mui/material/InputBase';
// import MenuIcon from '@mui/icons-material/Menu';
// import SearchIcon from '@mui/icons-material/Search';
// import NotificationsIcon from '@mui/icons-material/Notifications';
// import { Avatar, Badge, Button, Drawer, Grid, MenuItem, Tooltip } from '@mui/material';
// import { NavLink } from 'react-router-dom';
// import { useAppDispatch, useAppSelector } from '../redux/hook';
// import { thunkLogout } from '../redux/slices/auth/createAsyncThunk';

// const Search = styled('div')(({ theme }) => ({
//   position: 'relative',
//   borderRadius: theme.shape.borderRadius,
//   backgroundColor: alpha(theme.palette.common.white, 0.15),
//   '&:hover': {
//     backgroundColor: alpha(theme.palette.common.white, 0.25),
//   },
//   marginLeft: 0,
//   width: '100%',
//   [theme.breakpoints.up('sm')]: {
//     marginLeft: theme.spacing(1),
//     width: 'auto',
//   },
// }));

// const SearchIconWrapper = styled('div')(({ theme }) => ({
//   padding: theme.spacing(0, 2),
//   height: '100%',
//   position: 'absolute',
//   pointerEvents: 'none',
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
// }));

// const StyledInputBase = styled(InputBase)(({ theme }) => ({
//   color: 'inherit',
//   width: '100%',
//   '& .MuiInputBase-input': {
//     padding: theme.spacing(1, 1, 1, 0),
//     paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//     transition: theme.transitions.create('width'),
//     [theme.breakpoints.up('sm')]: {
//       width: '12ch',
//       '&:focus': {
//         width: '20ch',
//       },
//     },
//   },
// }));

// export default function NavBar(): JSX.Element {
//   const [drawerOpen, setDrawerOpen] = React.useState(false);

//   const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
//     if (
//       event &&
//       event.type === 'keydown' &&
//       ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')
//     ) {
//       return;
//     }
//     setDrawerOpen(open);
//   };


//   const auth = useAppSelector((store) => store.authSlice);
//   const { user } = auth;

//   const deals = useAppSelector((store) => store.dealSlice);
//   // console.log('>>>>>>>>>>>>>>>auth', auth);

//   const dispatch = useAppDispatch();


//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       <AppBar position="fixed" sx={{ top: 0, backgroundColor: 'primary.main' }}>
//         <Toolbar>
//           <IconButton size="large" edge="start" color="inherit" aria-label="open drawer" sx={{ mr: 2 }}>
//             <MenuIcon />
//           </IconButton>
//           <Typography
//             variant="h6"
//             noWrap
//             component="div"
//             sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
//           >
//             <Typography variant="h6" fontWeight="bold">
//               {user.status === 'authenticated' ? `Welcome, ${user.name} !` : 'Hello'}
//             </Typography>
//           </Typography>
//           <Grid item sx={{ ml: 2, mr: 2 }}>
//             <Button color="inherit" sx={{ fontWeight: 'bold' }} component={NavLink} to="/lk">
//               Личный кабинет
//             </Button>
//           </Grid>
//           <Grid item sx={{ ml: 2, mr: 2 }}>
//             <Button color="inherit" sx={{ fontWeight: 'bold' }} component={NavLink} to="/addDeal">
//               Аренда
//             </Button>
//           </Grid>
//           <Grid item sx={{ ml: 2, mr: 2 }}>
//             <Button color="inherit" sx={{ fontWeight: 'bold' }} component={NavLink} to="/">
//               Категории
//             </Button>
//           </Grid>
//           {user.status !== 'authenticated' ? (
//             <>
//               <Grid item sx={{ ml: 2, mr: 2 }}>
//                 <Button color="inherit" sx={{ fontWeight: 'bold' }} component={NavLink} to="/login">
//                   Авторизация
//                 </Button>
//               </Grid>
//               <Grid item sx={{ ml: 2, mr: 2 }}>
//                 <Button color="inherit" sx={{ fontWeight: 'bold' }} component={NavLink} to="/registration">
//                   Регистрация
//                 </Button>
//               </Grid>
//             </>
//           ) : (
//             <Grid item sx={{ ml: 2, mr: 2 }}>
//               <Button color="inherit" sx={{ fontWeight: 'bold' }} onClick={() => void dispatch(thunkLogout())}>
//                 Выйти
//               </Button>
//             </Grid>
//           )}
//           <Tooltip title="Open settings">
//             <IconButton sx={{ p: 0, ml: 2, mr: 2 }}>
//               <Avatar alt="Remy Sharp" src={user.avatar} />
//             </IconButton>
//           </Tooltip>

//           <MenuItem>
//             <IconButton size="large" aria-label="show 17 new notifications" color="inherit" >
//               <Badge badgeContent={17} color="error">
//                 <NotificationsIcon />
//               </Badge>
//             </IconButton>

//            </MenuItem>

//           <Search>
//             <SearchIconWrapper>
//               <SearchIcon />
//             </SearchIconWrapper>
//             <StyledInputBase placeholder="Search…" inputProps={{ 'aria-label': 'search' }} />
//           </Search>
//         </Toolbar>
//       </AppBar>
//       <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
//         {/* Здесь поместите содержимое вашего Drawer */}
//       </Drawer>
//     </Box>
//   );
// }



/// ///////////////////////////////////////////////////////
// old navbar


// import * as React from 'react';
// import { styled, useTheme } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import Drawer from '@mui/material/Drawer';
// import CssBaseline from '@mui/material/CssBaseline';
// import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
// import { NavLink } from 'react-router-dom';
// import { alpha } from '@mui/material/styles';
// import Toolbar from '@mui/material/Toolbar';
// import InputBase from '@mui/material/InputBase';
// import List from '@mui/material/List';
// import SearchIcon from '@mui/icons-material/Search';
// import NotificationsIcon from '@mui/icons-material/Notifications';
// import Typography from '@mui/material/Typography';
// import Divider from '@mui/material/Divider';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
// import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
// import ChevronRightIcon from '@mui/icons-material/ChevronRight';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';
// import { Avatar, Badge, Button, Grid, MenuItem, Tooltip } from '@mui/material';
// import { useAppDispatch, useAppSelector } from '../redux/hook';
// import { thunkLogout } from '../redux/slices/auth/createAsyncThunk';

// const drawerWidth = 240;

// const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
//   open?: boolean;
// }>(({ theme, open }) => ({
//   flexGrow: 1,
//   padding: theme.spacing(3),
//   transition: theme.transitions.create('margin', {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   marginLeft: `-${drawerWidth}px`,
//   ...(open && {
//     transition: theme.transitions.create('margin', {
//       easing: theme.transitions.easing.easeOut,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//     marginLeft: 0,
//   }),
// }));

// const Search = styled('div')(({ theme }) => ({
//   position: 'relative',
//   borderRadius: theme.shape.borderRadius,
//   backgroundColor: alpha(theme.palette.common.white, 0.15),
//   '&:hover': {
//     backgroundColor: alpha(theme.palette.common.white, 0.25),
//   },
//   marginLeft: 0,
//   width: '100%',
//   [theme.breakpoints.up('sm')]: {
//     marginLeft: theme.spacing(1),
//     width: 'auto',
//   },
// }));

// const SearchIconWrapper = styled('div')(({ theme }) => ({
//   padding: theme.spacing(0, 2),
//   height: '100%',
//   position: 'absolute',
//   pointerEvents: 'none',
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
// }));

// const StyledInputBase = styled(InputBase)(({ theme }) => ({
//   color: 'inherit',
//   width: '100%',
//   '& .MuiInputBase-input': {
//     padding: theme.spacing(1, 1, 1, 0),
//     paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//     transition: theme.transitions.create('width'),
//     [theme.breakpoints.up('sm')]: {
//       width: '12ch',
//       '&:focus': {
//         width: '20ch',
//       },
//     },
//   },
// }));

// interface AppBarProps extends MuiAppBarProps {
//   open?: boolean;
// }

// const AppBar = styled(MuiAppBar, {
//   shouldForwardProp: (prop) => prop !== 'open',
// })<AppBarProps>(({ theme, open }) => ({
//   transition: theme.transitions.create(['margin', 'width'], {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   ...(open && {
//     width: `calc(100% - ${drawerWidth}px)`,
//     marginLeft: `${drawerWidth}px`,
//     transition: theme.transitions.create(['margin', 'width'], {
//       easing: theme.transitions.easing.easeOut,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//   }),
// }));

// const DrawerHeader = styled('div')(({ theme }) => ({
//   display: 'flex',
//   alignItems: 'center',
//   padding: theme.spacing(0, 1),
//   // necessary for content to be below app bar
//   ...theme.mixins.toolbar,
//   justifyContent: 'flex-end',
// }));

// export default function NavBar(): JSX.Element {
//   const auth = useAppSelector((store) => store.authSlice);
//   const { user } = auth;

//   const deals = useAppSelector((state) => state.dealsSlice.deals);
//   const notificationsCounter = deals.length

//   console.log('все сделки -------------->', notificationsCounter);

//   const dispatch = useAppDispatch();
//   const theme = useTheme();
//   const [open, setOpen] = React.useState(false);

//   const handleDrawerOpen = () => {
//     setOpen(true);
//   };

//   const handleDrawerClose = () => {
//     setOpen(false);
//   };

//   return (
//     <Box sx={{ display: 'flex' }}>
//       <CssBaseline />
//       <AppBar position="fixed" open={open}>
//         <Toolbar>
//           <IconButton
//             color="inherit"
//             aria-label="open drawer"
//             onClick={handleDrawerOpen}
//             edge="start"
//             sx={{ mr: 2, ...(open && { display: 'none' }) }}
//           >
//             <MenuIcon />
//           </IconButton>

//           <Typography
//             variant="h6"
//             noWrap
//             component="div"
//             sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
//           >
//             <Typography variant="h6" fontWeight="bold">
//               {user.status === 'authenticated' ? `Welcome, ${user.name} !` : 'Hello'}
//             </Typography>
//           </Typography>
//           <Grid item sx={{ ml: 2, mr: 2 }}>
//             <Button color="inherit" sx={{ fontWeight: 'bold' }} component={NavLink} to="/lk">
//               Личный кабинет
//             </Button>
//           </Grid>
//           <Grid item sx={{ ml: 2, mr: 2 }}>
//             <Button color="inherit" sx={{ fontWeight: 'bold' }} component={NavLink} to="/addDeal">
//               Арендовать
//             </Button>
//           </Grid>
//           <Grid item sx={{ ml: 2, mr: 2 }}>
//             <Button color="inherit" component={NavLink} to="/add-item">
//               Разместить
//             </Button>
//           </Grid>
//           <Grid item sx={{ ml: 2, mr: 2 }}>
//             <Button color="inherit" sx={{ fontWeight: 'bold' }} component={NavLink} to="/">
//               Категории
//             </Button>
//           </Grid>
//           {user.status !== 'authenticated' ? (
//             <>
//               <Grid item sx={{ ml: 2, mr: 2 }}>
//                 <Button color="inherit" sx={{ fontWeight: 'bold' }} component={NavLink} to="/login">
//                   Авторизация
//                 </Button>
//               </Grid>
//               <Grid item sx={{ ml: 2, mr: 2 }}>
//                 <Button color="inherit" sx={{ fontWeight: 'bold' }} component={NavLink} to="/registration">
//                   Регистрация
//                 </Button>
//               </Grid>
//             </>
//           ) : (
//             <Grid item sx={{ ml: 2, mr: 2 }}>
//               <Button color="inherit" sx={{ fontWeight: 'bold' }} onClick={() => void dispatch(thunkLogout())}>
//                 Выйти
//               </Button>
//             </Grid>
//           )}
//           <Tooltip title="Open settings">
//             <IconButton sx={{ p: 0, ml: 2, mr: 2 }}>
//               <Avatar alt="Remy Sharp" src={user.avatar} />
//             </IconButton>
//           </Tooltip>

//           <MenuItem>
//             <IconButton size="large" aria-label="notification" color="inherit" >
//               <Badge badgeContent={notificationsCounter} color="error">
//                 <NotificationsIcon />
//               </Badge>
//             </IconButton>

//            </MenuItem>

//           <Search>
//             <SearchIconWrapper>
//               <SearchIcon />
//             </SearchIconWrapper>
//             <StyledInputBase placeholder="Search…" inputProps={{ 'aria-label': 'search' }} />
//           </Search>
//         </Toolbar>
//       </AppBar>

//       <Drawer
//         sx={{
//           width: drawerWidth,
//           flexShrink: 0,
//           '& .MuiDrawer-paper': {
//             width: drawerWidth,
//             boxSizing: 'border-box',
//           },
//         }}
//         variant="persistent"
//         anchor="left"
//         open={open}
//       >
//         <DrawerHeader>
//         <Typography variant="h6" noWrap component="div" sx={{ textAlign: 'center' }}>
//             ETDS
//           </Typography>
//           <IconButton onClick={handleDrawerClose}>
//             {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
//           </IconButton>
//         </DrawerHeader>
//         <Divider />
//         <List>
//           {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
//             <ListItem key={text} disablePadding>
//               <ListItemButton>
//                 <ListItemIcon>
//                   {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//                 </ListItemIcon>
//                 <ListItemText primary={text} />
//               </ListItemButton>
//             </ListItem>
//           ))}
//         </List>
//         <Divider />
//         <List>
//           {['All mail', 'Trash', 'Spam'].map((text, index) => (
//             <ListItem key={text} disablePadding>
//               <ListItemButton>
//                 <ListItemIcon>
//                   {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//                 </ListItemIcon>
//                 <ListItemText primary={text} />
//               </ListItemButton>
//             </ListItem>
//           ))}
//         </List>
//       </Drawer>
//     </Box>
//   );
// }



////////////////////////////////////////////////////////////////////////////////////////////////
import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import { NavLink } from 'react-router-dom';
import { alpha } from '@mui/material/styles';
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
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
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

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

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
  const deals = useAppSelector((state) => state.dealsSlice.deals);

  const auth = useAppSelector((store) => store.authSlice);
  const { user } = auth;

  const myItemDealsCounter = deals.filter((deal) => deal.ownerId === user.id ).length

  const notificationsCounter = deals.length

  console.log('все сделки -------------->', deals);
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
          <Badge badgeContent={myItemDealsCounter} color="error">
            <Typography variant="body2" style={{ color: 'white', marginLeft: '5px' }}>
              {myItemDealsCounter}
            </Typography>
          </Badge>
        </NavLink>
      </MenuItem>
      <MenuItem onClick={handleMenuClose2}>
        <NavLink to="/lk/my-deals" style={{ textDecoration: 'none', color: 'inherit' }}>
        Запросы
          <Badge badgeContent={notificationsCounter} color="error">
            <Typography variant="body2" style={{ color: 'white', marginLeft: '5px' }}>
              {notificationsCounter}
            </Typography>
          </Badge>
        </NavLink>
      </MenuItem>
    </Menu> 
  );



 





  const dispatch = useAppDispatch();
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
          <Grid item sx={{ ml: 2, mr: 2 }}>
            <Button color="inherit" sx={{ fontWeight: 'bold' }} component={NavLink} to="/lk">
              Личный кабинет
            </Button>
          </Grid>
          <Grid item sx={{ ml: 2, mr: 2 }}>
            <Button color="inherit" sx={{ fontWeight: 'bold' }} component={NavLink} to="/addDeal">
              Арендовать
            </Button>
          </Grid>
          <Grid item sx={{ ml: 2, mr: 2 }}>
            <Button color="inherit" sx={{ fontWeight: 'bold' }} component={NavLink} to="/add-item">
              Разместить
            </Button>
          </Grid>
          <Grid item sx={{ ml: 2, mr: 2 }}>
            <Button color="inherit" sx={{ fontWeight: 'bold' }} component={NavLink} to="/">
              Категории
            </Button>
          </Grid>
          {user.status !== 'authenticated' ? (
            <>
              <Grid item sx={{ ml: 2, mr: 2 }}>
                <Button color="inherit" sx={{ fontWeight: 'bold' }} component={NavLink} to="/login">
                  Авторизация
                </Button>
              </Grid>
              <Grid item sx={{ ml: 2, mr: 2 }}>
                <Button color="inherit" sx={{ fontWeight: 'bold' }} component={NavLink} to="/registration">
                  Регистрация
                </Button>
              </Grid>
            </>
          ) : (
            <Grid item sx={{ ml: 2, mr: 2 }}>
              <Button color="inherit" sx={{ fontWeight: 'bold' }} onClick={() => void dispatch(thunkLogout())}>
                Выйти
              </Button>
            </Grid>
          )}
          <Tooltip title="Open settings">
            <IconButton sx={{ p: 0, ml: 2, mr: 2 }}>
              <Avatar alt="Remy Sharp" src={user.avatar} />
            </IconButton>
          </Tooltip>

          <MenuItem>
            <IconButton onClick={handleProfileMenuOpen} size="large" aria-label="notification" color="inherit" >
              <Badge badgeContent={notificationsCounter} color="error">
                <NotificationsIcon />
              </Badge>
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
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
        <Typography variant="h6" noWrap component="div" sx={{ textAlign: 'center' }}>
            ETDS
          </Typography>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
}
