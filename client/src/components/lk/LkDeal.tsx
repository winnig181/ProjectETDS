import { Checkbox } from '@mui/material';
import React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';
import type { DealType } from '../../types/deal/deal';

// type Props = {};

export default function LkDeal({ deal }: { deal: DealType }): JSX.Element {
  const { startDate, endDate, tenantApproveDeal, tenantCloseDeal } = deal;
  const item = deal.Item.title;
  const owner = deal.ownerDetails.nickName;
  const formattedstartDate = format(new Date(startDate), 'd MMM yyyy', { locale: ru });
  const formattedendDate = format(new Date(endDate), 'd MMM yyyy', { locale: ru });
  return (
    <Paper
      sx={{
        p: 2,
        margin: 'auto',
        maxWidth: 1000,
        flexGrow: 1,
        backgroundColor: (theme) => (theme.palette.mode === 'dark' ? '#1A2027' : '#fff'),
      }}
    >
      <Grid container spacing={1} wrap="nowrap">
        <Grid item xs={2}>
          <Typography variant="body2" color="text.secondary">
            Наименование
          </Typography>
          <Typography gutterBottom variant="subtitle1">
            {item}
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography variant="body2" color="text.secondary">
            Владелец
          </Typography>
          <Typography gutterBottom variant="subtitle1">
            {owner}
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
        <Grid item xs={2}>
          <Typography variant="body2" color="text.secondary">
            Получил(-а)
          </Typography>
          <Checkbox
            checked={tenantApproveDeal}
            // onChange={}
            // inputProps={{ 'aria-label': 'controlled' }}
          />
        </Grid>
        <Grid item xs={2}>
          <Typography variant="body2" color="text.secondary">
            Вернул(-а)
          </Typography>
          <Checkbox
            checked={tenantCloseDeal}
            // onChange={handleChange}
            // inputProps={{ 'aria-label': 'controlled' }}
          />
        </Grid>
      </Grid>
    </Paper>
  );
}
