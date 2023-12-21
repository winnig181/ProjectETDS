import { Checkbox, FormControlLabel } from '@mui/material';
import React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';
import Button from '@mui/material/Button';
import type { DealType } from '../../types/deal/deal';
import { useAppDispatch } from '../../redux/hook';
import { thunkOwnerApproveDeal } from '../../redux/slices/ownerdeals/createAsyncThunk';
import { setCurrentOwnerDeal } from '../../redux/slices/ownerdeals/ownerDealsSlice';


export default function LkDealOwner({ deal }: { deal: DealType }): JSX.Element {
  const dispatch = useAppDispatch();
  const {
    startDate,
    endDate,
    tenantDetails,
    ownerApproveDeal,
    tenantApproveDeal,
    tenantCloseDeal,
    ownerCloseDeal,
  } = deal;
  const item = deal.Item.title;
  // console.log(">>>>>>>>>>deal",deal);
  
  const tenant = tenantDetails.nickName;
  const formattedstartDate = format(new Date(startDate), 'd MMM yyyy', { locale: ru });
  const formattedendDate = format(new Date(endDate), 'd MMM yyyy', { locale: ru });

      //   {/* <CardHeader 
      // onClick={() => {dispatch(setCurrentOwnerDeal(item));}}
      //   title={ownerDetails.nickName}
      //   subheader="владелец"
      // /> */}

  return (
    <Paper
      sx={{
        p: 2,
        marginLeft: 0,
        margin: 'auto',
        // maxWidth: 1000,
        // flexGrow: 1,
        // backgroundColor: (theme) => (theme.palette.mode === 'dark' ? '#1A2027' : '#fff'),
      }}
    >
      <Grid container spacing={1} wrap="nowrap">
        <Grid item xs={3}>
          <Typography variant="body2" color="text.secondary">
            Наименование
          </Typography>
          <Typography gutterBottom variant="subtitle1">
            {item}
          </Typography>
        </Grid>
        <Grid item xs={3} 
        onClick={() => {dispatch(setCurrentOwnerDeal(deal));}}
        sx={{
          cursor: 'pointer',
        }}
        >
          <Typography variant="body2" color="text.secondary">
            Запрос от
          </Typography>
          <Typography gutterBottom variant="subtitle1"
          >
            {tenant}
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography variant="body2" color="text.secondary">
            Начало срока
          </Typography>
          <Typography gutterBottom variant="subtitle1">
            {formattedstartDate}
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography variant="body2" color="text.secondary">
            Конец срока
          </Typography>
          <Typography gutterBottom variant="subtitle1">
            {formattedendDate}
          </Typography>
        </Grid>
        <Grid item xs={1.5}>
          <Typography variant="body2" color="text.secondary">
            Одобрить
          </Typography>
          <FormControlLabel
            label=""
            control={<Checkbox checked={ownerApproveDeal} />}
            onChange={() => void dispatch(thunkOwnerApproveDeal(deal.id))}
            color="secondary"
          />
          {/* <Checkbox
            checked={ownerApproveDeal}
            // onChange={()=>void dispatch(thunkOwnerApproveDeal(deal.id))}
          /> */}
        </Grid>
        <Grid item xs={1.5}>
          <Typography variant="body2" color="text.secondary">
            Возвращен
          </Typography>
          <Checkbox
            checked={ownerCloseDeal}
            // onChange={}
          />
        </Grid>
        {/* <Grid item xs={1.5}>
          <Typography variant="body2" color="text.secondary">
            Вернул(-а)
          </Typography>
          <Checkbox
            checked={tenantCloseDeal}
            onChange={handleChange}
          />
        </Grid> */}
        <Grid item xs={2}>
          <Button
            variant="outlined"
            disabled={
              !tenantCloseDeal || !tenantApproveDeal || !ownerApproveDeal || !ownerCloseDeal
            }
          >
            Оставить отзыв
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
}
