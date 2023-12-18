import * as React from 'react';
import { Card, CardActions, Container, Grid } from '@mui/material';
import { useAppSelector } from '../redux/hook';
import type { DealType } from '../types/deal/deal';
import LkDeal from '../components/lk/LkDeal';


export default function LkMyDealsPage({}: Props): JSX.Element {
  const deals = useAppSelector((state) => state.dealsSlice.deals);
  const user = useAppSelector((state) => state.authSlice.user);

  console.log('>>>>user:', user);
  console.log('>>>>deals:', deals);
  const mydeals = deals.filter((deal) => deal.tenantId === user.id);
  console.log('>>>>mydeals:', mydeals);
  return (
    <>
      <div>LkMyDealsPage</div>
      {mydeals.map((el)=>
      <LkDeal key={el.id} deal ={el} />)}
    </>
  );
}
