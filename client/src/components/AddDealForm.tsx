import React, { useState } from 'react';
import { Container, TextField, Button, Grid } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../redux/hook';

function AddDealForm(): JSX.Element {
  const [formData, setFormData] = useState({
    dealText: '',
    startDate: '',
    endDate: '',
  });

  const user = useAppSelector((store) => store.authSlice.user);
  const dispatch = useAppDispatch();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleAddDeal = () => {
    // Отправка formData
    console.log('Добавлена новая сделка:', formData);
    // Очистка полей после добавления сделки
    setFormData({
      dealText: '',
      startDate: '',
      endDate: '',
    });
  };

  return (
    <Container maxWidth="md">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Текст сделки"
            variant="outlined"
            name="dealText"
            value={formData.dealText}
            onChange={handleInputChange}
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
            Добавить сделку
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}

export default AddDealForm;
