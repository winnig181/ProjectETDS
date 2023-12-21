/* eslint-disable react/jsx-no-useless-fragment */
import React, {useEffect} from 'react';
import { Container, Grid, Typography } from '@mui/material';
import CategoryCard from '../components/CategoryCard';
import {useAppDispatch, useAppSelector} from "../redux/hook";
import {thunkCategoriesLoad} from "../redux/slices/categories/createAsyncThunk";
import { NavLink } from 'react-router-dom';

export default function HomePage(): JSX.Element {
    // const categories = useAppSelector((store)=> store.categoriesSlice.categories)
    // const dispatch = useAppDispatch()
    // useEffect(()=> {
    //     dispatch(thunkCategoriesLoad())
    // }, [])
    const auth = useAppSelector((store) => store.authSlice);

  return (

    <Container sx={{ backgroundColor: 'background.default' , minHeight: '100vh',textAlign: 'center'  }}>
        <Grid style={{height: '68px'}}/>

      <Typography variant="h4" gutterBottom >
        Добро пожаловать на сайт ДоброЁж, <br/>
        где Вы можете арендовать <br/>
        или <br/>
        предоставить собственные вещи в аренду
      </Typography>

        {auth.user.status !== 'authenticated' ? ( 
      <Typography variant="body1" gutterBottom >
        Чтобы воспользовать всеми возможностями сайта, необходимо пройти <a href="/login"> авторизацию </a> 
      </Typography>
      ) : (
        <Typography variant="h6" gutterBottom 
        component={NavLink} to="/main">
        Что Вас сегодня интересует?
      </Typography>  
      )}
  
    </Container>
  );
}
