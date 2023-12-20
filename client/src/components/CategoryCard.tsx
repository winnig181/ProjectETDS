import React from 'react';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

type CategoryProps = {
  category: {
    categoryName: string
    id: number
  }
}

export default function CategoryCard({ category }: CategoryProps): JSX.Element {
  // const clickHandler = ():void => {
  //   window.location.href = `/categories/${category.id}`;
  // };

  return (
    <Link to={`/categories/${category.id}`}>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea style={{ cursor: 'pointer' }} 
      // onClick={clickHandler}
      >
        <CardMedia
          component="img"
          height="140"
          image="/public/img/vite.svg"
          alt="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {category.categoryName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {category.categoryName}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Link>
  );
}
