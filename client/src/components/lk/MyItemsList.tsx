import * as React from 'react';

import { Card, CardActions, Container, Grid } from '@mui/material';
import { useAppSelector } from '../../redux/hook';
import type { ItemType } from '../../types/item/item';
import LkMyItemCard from './LkMyItemCard';

// type PropsLkCard = {
//   text: string;
// }

export default function MyItemsList(): JSX.Element {
  const items = useAppSelector((state) => state.itemsSlice.items);
  const user = useAppSelector((state) => state.authSlice.user);

  console.log('>>>>user:', user);
  console.log('>>>>items:', items);
  const myItems = items.filter((item) => item.userId === user.id);
  return (
    <Grid container rowSpacing={2} columnSpacing={4} justifyContent="flex-start">
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
