/* eslint-disable react/jsx-no-useless-fragment */
import React, {useEffect} from 'react';
import { Container, Grid, Typography } from '@mui/material';
import CategoryCard from '../components/CategoryCard';
import {useAppDispatch, useAppSelector} from "../redux/hook";
import {thunkCategoriesLoad} from "../redux/slices/categories/createAsyncThunk";

export default function MainPage(): JSX.Element {
    const categories = useAppSelector((store)=> store.categoriesSlice.categories)
    const dispatch = useAppDispatch()
    useEffect(()=> {
        dispatch(thunkCategoriesLoad())
    }, [])

  return (

    <Container sx={{ backgroundColor: 'background.default' , minHeight: '100vh' }}>
        <Grid style={{height: '68px'}}>
        </Grid>
      <Typography variant="h3" gutterBottom sx={{ textAlign: 'center' }}>
        КАТЕГОРИИ
      </Typography>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
  {categories.map((category) => (
    <Grid item xs={2} sm={4} md={4} key={category.id}>
      <CategoryCard category = {category} />
    </Grid>
  ))}
</Grid>
    </Container>
  );
}
