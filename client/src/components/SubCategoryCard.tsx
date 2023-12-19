import React, {useEffect} from 'react';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import type { SubcatType } from '../types/subcategory';
import {useAppDispatch, useAppSelector} from "../redux/hook";
import {thunkCategoriesLoad} from "../redux/slices/categories/createAsyncThunk";
import category from "../services/category";
import {thunkItemsLoad} from "../redux/slices/items/createAsyncThunk";
import {useParams} from 'react-router-dom'

type SubCategorProps = {
  category: {
    subCategoryName: string
    id: number
  }
};

export default function SubCategoryCard({ subcat, category }: SubCategorProps): JSX.Element {
  const items = useAppSelector((store)=> store.itemsSlice.items)
  const dispatch = useAppDispatch()
  const {id} = useParams()


  // useEffect(()=> {
  //   dispatch(thunkItemsLoad(id))
  // }, [])
  const clickHandler = () => {
    window.location = `/categories/subcats/${subcat.id}`
  };
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea style={{ cursor: 'pointer' }} onClick={clickHandler}>
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
