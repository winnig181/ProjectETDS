import * as React from 'react';

import { Card, CardActions, Container, Grid } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../redux/hook';
import type { ItemType } from '../../types/item/item';
import LkMyItemCard from './LkMyItemCard';
import { thunkItemsLoad } from '../../redux/slices/items/createAsyncThunk';

// type PropsLkCard = {
//   text: string;
// }

export default function MyItemsList(): JSX.Element {
  const dispatch = useAppDispatch();
  
  React.useEffect(() => {
    void dispatch(thunkItemsLoad());
  }, []);


  const items = useAppSelector((state) => state.itemsSlice.items);
  const user = useAppSelector((state) => state.authSlice.user);

  // console.log('>>>>user:', user);
  // console.log('>>>>items:', items);
  const myItems = items.filter((item) => item.userId === user.id); 

  return (
    <Grid container rowSpacing={2} columnSpacing={2} 
    sx={{
      marginLeft: 0.5
      // justifyContent: "center"
      }}>
      {/* <Grid item xs={12} sm={12} md={6}> */}
      {myItems.map((item: ItemType) => (
        <Grid key={item.id} item xs={12} sm={12} md={6}>
          <LkMyItemCard item={item} />
        </Grid>
      ))}
     {/* </Grid>  */}
    </Grid>
  );
}
