/* eslint-disable react/jsx-no-useless-fragment */
import React, {useEffect} from 'react';
import { Box, Card, CardActionArea, CardContent, Container, Grid, Typography } from '@mui/material';
import {useAppDispatch, useAppSelector} from "../redux/hook";
import {thunkCategoriesLoad} from "../redux/slices/categories/createAsyncThunk";
import { Link } from 'react-router-dom';




export default function MainPage(): JSX.Element {
    const categories = useAppSelector((store)=> store.categoriesSlice.categories)
    const dispatch = useAppDispatch()
    useEffect(()=> {
        dispatch(thunkCategoriesLoad())
    }, [])



  return (

<Container sx={{ backgroundColor: 'background.default' , minHeight: '100vh' }}>
<Grid style={{height: '48px'}}>
</Grid>
<Typography variant="h3" gutterBottom sx={{ textAlign: 'center', paddingBottom: '30px'  }}>
КАТЕГОРИИ
</Typography>
<Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>

<Grid item xs={2} sm={4} md={4}>
  <Link to={`/categories/1`}> 
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea style={{ cursor: 'pointer' }}
      
      >
       <Box
        component="video"     
        width={256}
        height={256}
        preload="none"
        autoPlay
        loop
        muted
        playsInline
        sx={{
          background: `transparent url('https://cdn-icons-png.flaticon.com/512/6451/6451064.png') 50% 50% / cover no-repeat`,
        }}
        >
        <source src="https://cdn-icons-mp4.flaticon.com/512/6451/6451064.mp4" type="video/mp4" />
      </Box>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Спорт
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Link>
  </Grid> 


  <Grid item xs={2} sm={4} md={4}>
  <Link to={`/categories/2`}> 
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea style={{ cursor: 'pointer' }}
      // onClick={clickHandler}
      >
            <Box
        component="video"
        width={256}
        height={256}
        preload="none"
        autoPlay
        loop
        muted
        playsInline
        sx={{
          background: `transparent url('https://cdn-icons-png.flaticon.com/512/10468/10468642.png') 50% 50% / cover no-repeat`,
        }}
      >
        <source src="https://cdn-icons-mp4.flaticon.com/512/10468/10468642.mp4" type="video/mp4" />
      </Box>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Техника
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Link>
  </Grid> 


  <Grid item xs={2} sm={4} md={4}>
  <Link to={`/categories/3`}> 
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea style={{ cursor: 'pointer' }}
      // onClick={clickHandler}
      >
             <Box
        component="video"
        width={256}
        height={256}
        preload="none"
        autoPlay
        loop
        muted
        playsInline
        sx={{
          background: `transparent url('https://cdn-icons-png.flaticon.com/512/8745/8745711.png') 50% 50% / cover no-repeat`,
        }}
      >
        <source src="https://cdn-icons-mp4.flaticon.com/512/8745/8745711.mp4" type="video/mp4" />
      </Box>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Одежда
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Link>
  </Grid> 


  <Grid item xs={2} sm={4} md={4}>
  <Link to={`/categories/4`}> 
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea style={{ cursor: 'pointer' }}
      // onClick={clickHandler}
      >
      <Box
        component="video"
        width={256}
        height={256}
        preload="none"
        autoPlay
        loop
        muted
        playsInline
        sx={{
          background: `transparent url('https://cdn-icons-png.flaticon.com/512/9583/9583340.png') 50% 50% / cover no-repeat`,
        }}
      >
        <source src="https://cdn-icons-mp4.flaticon.com/512/9583/9583340.mp4" type="video/mp4" />
      </Box>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Развлечения
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Link>
  </Grid> 


  <Grid item xs={2} sm={4} md={4}>
  <Link to={`/categories/5`}> 
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea style={{ cursor: 'pointer' }}
      // onClick={clickHandler}
      >
      <Box
        component="video"
        width={256}
        height={256}
        preload="none"
        autoPlay
        loop
        muted
        playsInline
        sx={{
          background: `transparent url('https://cdn-icons-png.flaticon.com/512/8629/8629186.png') 50% 50% / cover no-repeat`,
        }}
      >
        <source src="https://cdn-icons-mp4.flaticon.com/512/8629/8629186.mp4" type="video/mp4" />
      </Box>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Инструменты
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Link>
  </Grid> 


  <Grid item xs={2} sm={4} md={4}>
  <Link to={`/categories/6`}> 
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea style={{ cursor: 'pointer' }}
      // onClick={clickHandler}
      >
 <Box
        component="video"
        width={256}
        height={256}
        preload="none"
        autoPlay
        loop
        muted
        playsInline
        sx={{
          background: `transparent url('https://cdn-icons-png.flaticon.com/512/11256/11256667.png') 50% 50% / cover no-repeat`,
        }}
      >
        <source src="https://cdn-icons-mp4.flaticon.com/512/11256/11256667.mp4" type="video/mp4" />
      </Box>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Творчество
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Link>
  </Grid> 

</Grid>
</Container>
);
}

