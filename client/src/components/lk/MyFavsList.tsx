import * as React from 'react';

import { Card, CardActions, Container, Grid } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../redux/hook';
import type { ItemType } from '../../types/item/item';
import LkMyItemCard from './LkMyItemCard';
import { thunkItemsLoad } from '../../redux/slices/items/createAsyncThunk';

// type PropsLkCard = {
//   text: string;
// }

export default function MyFavsList(): JSX.Element {
  const dispatch = useAppDispatch();
  
  // React.useEffect(() => {
  //   void dispatch(thunkItemsLoad());
  // }, []);


  const favItems = useAppSelector((state) => state.itemsSlice.favItems);
  const user = useAppSelector((state) => state.authSlice.user);

  // console.log('>>>>user:', user);
  // console.log('>>>>items:', items);

  return (
    <Grid container rowSpacing={2} columnSpacing={4} 
    sx={{
      marginLeft: 0.5
      // justifyContent: "center"
      }}>
      {/* <Grid item xs={12} sm={12} md={6}> */}
      {favItems.map((item: ItemType) => (
        <Grid key={item.id} item xs={12} sm={12} md={6}>
          <LkMyItemCard item={item} />
        </Grid>
      ))}
     {/* </Grid>  */}
    </Grid>
  );
}
