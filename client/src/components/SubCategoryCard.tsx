import React from 'react';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import type { SubcatType } from '../types/subcategory';

type SubCategorProps = {
  subcat: SubcatType;
};

export default function SubCategoryCard({ subcat }: SubCategorProps): JSX.Element {
  // const clickHandler = () => {
  //   window.location = `/categories/${category.id}`;
  // };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea 
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
            {subcat.subCategoryName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            описание
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
