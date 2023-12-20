import * as React from 'react';
import { Card, CardActions, Container, Grid, Typography } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../redux/hook';
import type { DealType } from '../types/deal/deal';
import LkDeal from '../components/lk/LkDeal';
import { thunkDealsLoad } from '../redux/slices/deals/createAsyncThunk';


export default function LkMyDealsPage({}: Props): JSX.Element {
  const dispatch = useAppDispatch();
  const mydeals = useAppSelector((state) => state.dealsSlice.deals);
  const user = useAppSelector((state) => state.authSlice.user);
  // console.log('>>>>user:', user);
  // console.log('>>>>deals:', deals);
  // const mydeals = deals.filter((deal) => deal.tenantId === user.id);
  console.log('>>>>mydeals:', mydeals);

  React.useEffect(() => {
    void dispatch(thunkDealsLoad());
  }, []);

  return (
    <Container>
    <Typography
      variant="h5"
      component="div"
      gutterBottom
      style={{ marginTop: '40px',marginBottom: '40px' }}
    >
      Арендованные предметы
    </Typography>
      {mydeals.map((el)=>
      <LkDeal key={el.id} deal ={el} />)}
    </Container>
  );
}
