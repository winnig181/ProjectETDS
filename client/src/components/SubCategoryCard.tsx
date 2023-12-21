import React, {useEffect} from 'react';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {Link} from 'react-router-dom'
import {useAppDispatch, useAppSelector} from "../redux/hook";
import {thunkSubcatsLoad} from "../redux/slices/subcats/createAsyncThunk";


export default function SubCategoryCard({subcat}): JSX.Element {
  const subcats = useAppSelector((store)=> store.subcatsSlice.subcats)
  const dispatch = useAppDispatch()

  useEffect(()=> {
    dispatch(thunkSubcatsLoad())
  }, [])

  // const clickHandler = (id) => {
  //   window.location = '/subcats/items/'
  // };

  return (
    <Link to={`/categories/${subcat.id}`}>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea style={{ cursor: 'pointer' }}
      // onClick={() => clickHandler(subcat.id)}
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
          <Typography variant="body2" color="text.secondary">
            {subcat.subCategoryName}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Link>
  );
}
