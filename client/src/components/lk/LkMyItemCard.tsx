import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardMedia } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import type { ItemType } from '../../types/item/item';

type PropsLkMyItemCard = {
  item: ItemType;
};

export default function LkMyItemCard({ item }: PropsLkMyItemCard): JSX.Element {
  const { price, title, description, img1, img2, img3, condition, status, hidden, subCategoryId } =
    item;
  return (
    <Card sx={{ display: 'flex' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            {title}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            {description}
          </Typography>
          <Typography component="div" variant="h5">
            Цена: {price}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            Подкатегория: {subCategoryId}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            Состояние: {condition}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            Статус: {status}
          </Typography>
        </CardContent>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardMedia component="img" sx={{ width: 100 }} image="/public/img/vite.svg" alt="img1" />
        <CardMedia component="img" sx={{ minWidth: 100 }} image="/public/img/vite.svg" alt="img2" />
      </Box>
      <CardActions>
        {/* <Stack direction="row" spacing={2}> */}
        <Button size="small" variant="contained">
          {hidden ? 'Отобразить' : 'Спрятать от показа'}
        </Button>
        <Button variant="outlined" startIcon={<DeleteIcon />}>
          Удалить с сайта
        </Button>
      </CardActions>
      {/* <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
        </Box> */}
    </Card>
  );
}
