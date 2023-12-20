import * as React from 'react';
import { Card, CardActions, Container, Grid, Typography } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../redux/hook';
import type { DealType } from '../../types/deal/deal';
import { thunkDealsLoad } from '../../redux/slices/deals/createAsyncThunk';
import LkDealOwner from './LkDealOwner';
import { thunkOwnerDealsLoad } from '../../redux/slices/ownerdeals/createAsyncThunk';

export default function MyOwnersDealsList({}: Props) {
  const dispatch = useAppDispatch();
  const alldeals = useAppSelector((state) => state.ownerDealsSlice.ownerdeals);
  const user = useAppSelector((state) => state.authSlice.user);
  console.log('>>>>user:', user);
console.log('>>>>deals:', alldeals);
  const myownerdeals = alldeals.filter((deal) => deal.ownerId === user.id);
  

  React.useEffect(() => {
    void dispatch(thunkOwnerDealsLoad());
  }, []);

  return (
    <Container>
      {myownerdeals.map((el) => (
        <LkDealOwner key={el.id} deal={el} />
      ))}
    </Container>
  );
}
