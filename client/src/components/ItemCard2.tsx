import React from 'react';
import { Card, CardContent, CardActions, Button, Typography, Divider } from '@mui/material';
import { useAppDispatch } from '../redux/hook';
import { thunkDealsAdd } from '../redux/slices/deals/createAsyncThunk';

function ItemCard3({ item }: { item: any }): JSX.Element {
  const dispatch = useAppDispatch();

  const handleAddDeal = () => {
    window.location = `/addDeal/${item.id}`;


    const formData = {
      title: item.title,
      description: item.description,
      condition: item.condition,
      status: item.status,
      price: item.price,
      // Добавьте другие свойства item, если они нужны для создания сделки
    };

    // Отправка formData с помощью thunkDealsAdd
    dispatch(thunkDealsAdd(formData));
  };

  return (
    <Card style={{ marginTop: '30px' }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {item.title}
        </Typography>
        <Typography color="text.secondary">Description: {item.description}</Typography>
        <Divider />
        <Typography color="text.secondary">Condition: {item.condition}</Typography>
        <Typography color="text.secondary">Status: {item.status}</Typography>
        <Typography color="text.secondary">Price: {item.price}</Typography>
        {/* Остальные данные из вашей модели Item */}
      </CardContent>
      <CardActions>
        <Button onClick={handleAddDeal} size="small" color="primary">
          ПРИВЕТ МЕДВЕД
        </Button>
      </CardActions>
    </Card>
  );
}

export default ItemCard3;
