/* eslint-disable react/jsx-no-useless-fragment */
import React, {useEffect} from 'react';
import { Container, Grid, Typography } from '@mui/material';
import CategoryCard from '../components/CategoryCard';
import ItemCard from "../components/ItemCard";
import {useAppDispatch, useAppSelector} from "../redux/hook";
import axios from "axios";
import {thunkCategoriesLoad} from "../redux/slices/categories/createAsyncThunk";

export default function MainPage(): JSX.Element {
    const categories = useAppSelector((store)=> store.categoriesSlice.categories)
    const dispatch = useAppDispatch()
    useEffect(()=> {
        dispatch(thunkCategoriesLoad())
    }, [])
    console.log(categories, '<<<------------categotries')
  // const mockCategories = [
  //  {categoryName: 'Электроника',
  //   id:1},
  //  {categoryName: 'Одежда',
  //  id:2},
  //  {categoryName: 'Красота и здоровье',
  //   id:3},
  //  {categoryName: 'Спорт и отдых',
  //  id:4},
  //  {categoryName:  'Книги',
  //  id:5},
  //  {categoryName:  'Дом и сад',
  //  id:6},
  // ]
  return (

    <Container sx={{ backgroundColor: 'background.default' , minHeight: '100vh' }}>
        <Grid style={{height: '68px'}}>
        </Grid>
      <Typography variant="h3" gutterBottom sx={{ textAlign: 'center' }}>
        если хотите хороший сайт, позвоните:
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
