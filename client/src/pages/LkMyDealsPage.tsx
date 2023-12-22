import * as React from 'react';
import { Container, Typography } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../redux/hook';
import LkDeal from '../components/lk/LkDeal';
import { thunkDealsLoad } from '../redux/slices/deals/createAsyncThunk';

export default function LkMyDealsPage({}): JSX.Element {
  const dispatch = useAppDispatch();
  const mydeals = useAppSelector((state) => state.dealsSlice.deals);
  const user = useAppSelector((state) => state.authSlice.user);
  // const mydeals = deals.filter((deal) => deal.tenantId === user.id);

  React.useEffect(() => {
    void dispatch(thunkDealsLoad());
  }, []);

  return (
    <Container>
      {/* <Typography
        variant="h5"
        component="div"
        gutterBottom
        style={{ marginTop: '40px', marginBottom: '40px' }}
      > */}
      <Typography
        variant="h4"
        sx={{ alignSelf: 'center', marginBottom: '30px', paddingTop: '30px' }}
      >
        Арендованные предметы
      </Typography>
      {mydeals.map((el) => (
        <LkDeal key={el.id} deal={el} />
      ))}
    </Container>
  );
}
