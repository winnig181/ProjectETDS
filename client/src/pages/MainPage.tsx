/* eslint-disable react/jsx-no-useless-fragment */
import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import CategoryCard from '../components/CategoryCard';

export default function MainPage(): JSX.Element {
  const mockCategories = [
   {categoryName: 'Электроника',
    id:1},
   {categoryName: 'Одежда',
   id:2},
   {categoryName: 'Красота и здоровье',
    id:3},
   {categoryName: 'Спорт и отдых',
   id:4},
   {categoryName:  'Книги',
   id:5},
   {categoryName:  'Дом и сад',
   id:6},
  ];

  return (
    <Container sx={{ minHeight: '100vh' }}>
      <Typography variant="h3" gutterBottom sx={{ textAlign: 'center' }}>
        Выберите категорию:
      </Typography>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
  {mockCategories.map((category) => (
    <Grid item xs={2} sm={4} md={4} key={category.id}>
      <CategoryCard category = {category} />
    </Grid>
  ))}
</Grid>
    </Container>
  );
}
