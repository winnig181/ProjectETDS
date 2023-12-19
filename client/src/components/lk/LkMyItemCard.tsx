import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardHeader, CardMedia } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import Box from '@mui/material/Box';
import type { ItemType } from '../../types/item/item';
import { useAppDispatch } from '../../redux/hook';
import { setCurrentItem } from '../../redux/slices/items/itemsSlice';

type PropsLkMyItemCard = {
  item: ItemType;
};

export default function LkMyItemCard({ item }: PropsLkMyItemCard): JSX.Element {
  const dispatch = useAppDispatch();
  const { price, title, description, img1, img2, img3, condition, status, hidden, subCategoryId,ownerDetails } =    item;
  return (
    <Card sx={{ display: 'flex', flexDirection: 'column', minWidth: 450, padding:2 }}>
      <CardHeader onClick={() => {dispatch(setCurrentItem(item));}}

        title={ownerDetails.nickName}
        subheader="владелец"
      />
      <Box sx={{ display: 'flex',  justifyContent: 'space-between'}}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent>

          <Typography variant="h3">
            {title}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            {description}
          </Typography>
          <Typography component="div" variant="h6">
            Цена (за день): {price}
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
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <CardMedia component="img" sx={{ minWidth: 100 }} image="/public/img/vite.svg" alt="img1" />
        <CardMedia component="img" sx={{ minWidth: 100 }} image="/public/img/vite.svg" alt="img2" />
      </Box>
      </Box>
          <CardActions sx={{ display: 'flex'}}>
            <Button size="medium" variant="outlined">
              Возвращен ?
            </Button>
            <Button size="medium" variant="outlined">
              Изменить
            </Button>
            <Button size="medium" variant="outlined">
              {hidden ? 'Отобразить' : 'Спрятать'}
            </Button>
            <Button variant="outlined" startIcon={<DeleteIcon />}>
              Удалить
            </Button>
          </CardActions>
    </Card>
  );
}
