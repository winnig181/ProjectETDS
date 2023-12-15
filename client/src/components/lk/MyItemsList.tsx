import * as React from 'react';

import { Card, CardActions, Container, Grid } from '@mui/material';
import { useAppSelector } from '../../redux/hook';
import type { ReviewType } from '../../types/review/review';
import ReviewCard from './ReviewCard';

// type PropsLkCard = {
//   text: string;
// }

export default function MyItemsList(): JSX.Element {
  const items = useAppSelector((state) => state.itemsSlice.items);
  const auth = useAppSelector((state) => state.authSlice.user);
  const { user } = auth;
  console.log('>>>>user:', user);
  const myItems = items.filter((item) => item.userId === user.id);
  return (
    <Grid container spacing={1}>
      {myItems.map((item: ItemType) => (
        <Grid key={item.id} item xs={2}>
          <ItemCard item={item} />
        </Grid>
      ))}
    </Grid>
  );
}
