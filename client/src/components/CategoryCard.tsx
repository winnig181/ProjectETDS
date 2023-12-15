import React from 'react';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import type { CategoryType } from '../types/category';

type CategoryProps = {
  category: CategoryType;
};

export default function CategoryCard({ category }: CategoryProps): JSX.Element {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {category.categoryName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            какой-то текст
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}