import React, { useEffect, useState } from 'react';
import { Container, TextField, Button, Grid } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../redux/hook';
import ItemCard3 from './ItemCard3';
import { thunkDealsAdd } from '../redux/slices/deals/createAsyncThunk';


function AddDealForm(): JSX.Element {
  const [formData, setFormData] = useState({
    dealText: '',
    startDate: '',
    endDate: '',
  });

  const dispatch = useAppDispatch();

  useEffect(() => {
    void dispatch(thunkDealsAdd())

  }, []);


  const { id } = useParams()
  const item = useAppSelector((store => store.itemsSlice.items))

  console.log(item, 'item na fronte', id);

  const user = useAppSelector((store) => store.authSlice.user);


  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    if (name === 'startDate' && formData.endDate && value > formData.endDate) {
      setFormData({
        ...formData,
        startDate: value,
        endDate: value, // Если пользователь выбрал startDate позже endDate, endDate будет установлена в startDate
      });
    } else if (name === 'endDate' && formData.startDate && value < formData.startDate) {
      // Если пользователь выбрал endDate раньше startDate, ничего не делаем
      return;
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  console.log('вот она родима формадата:', formData)

      const handleAddDeal = () => {
        try {
          if (!formData.startDate || !formData.endDate) {
            throw new Error('Выберите дату начала и окончания аренды');
          }

          setFormData({
            ...formData,
            ownerId: item[id].userId,
            tenantId: user.id,
            itemId: item[id].id,
          });
         void dispatch(thunkDealsAdd(formData))
          console.log('Добавлена новая сделка:', formData);
        } catch (error) {
          console.log('Ошибка:', error.message);
        }

    // Отправка formData
    // Очистка полей после добавления сделки
    // setFormData({
    //   dealText: '',
    //   startDate: '',
    //   endDate: '',
    // });
  };

  return (
    <Container maxWidth="md">

      {item[id] && <ItemCard3  item = {item[id]} />}

      <Grid container spacing={2}>
        <Grid item xs={12} style={{margin: '10px'}}>
          <TextField
            fullWidth
            label="Текст сделки"
            variant="outlined"
            name="dealText"
            value={formData.dealText}
            onChange={handleInputChange}
            style={{margin: '10px'}}
          />
        </Grid>


        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Начало аренды"
            type="date"
            variant="outlined"
            name="startDate"
            value={formData.startDate}
            onChange={handleInputChange}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Окончание аренды"
            type="date"
            variant="outlined"
            name="endDate"
            value={formData.endDate}
            onChange={handleInputChange}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" onClick={handleAddDeal}>
            Запрос на сделку
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}

export default AddDealForm;
