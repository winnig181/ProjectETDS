import React, {useEffect} from 'react';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {Link, useParams} from 'react-router-dom'
import {useAppDispatch, useAppSelector} from "../redux/hook";

type SubCategorProps = {
  subcat: {
    subCategoryName: string
    id: number
  }
};

export default function SubCategoryCard({ subcat }: SubCategorProps): JSX.Element {

  return (
    <Link to={`/subcats/items/${subcat.id}`}>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea style={{ cursor: 'pointer' }} 

      >
        <CardMedia
          component="img"
          height="140"
          image="/public/img/vite.svg"
          alt="Contemplative Reptile" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {subcat.subCategoryName}
          </Typography>

        </CardContent>
      </CardActionArea>
    </Card>
    </Link>
  );
}