import React, { useState } from 'react';
import { Container, TextField, Button, Grid } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../redux/hook';

function AddDealForm(): JSX.Element {
  const [dealText, setDealText] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDealText(event.target.value);
  };

  const handleStartDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStartDate(event.target.value);
  };

  const handleEndDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEndDate(event.target.value);
  };

  const handleAddDeal = () => {
    // Здесь можно обработать добавление сделки
    console.log('Добавлена новая сделка:', dealText, startDate, endDate);
    // Очистка полей после добавления сделки
    setDealText('');
    setStartDate('');
    setEndDate('');
  };


  
  return (
    <Container maxWidth="md">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Текст сделки"
            variant="outlined"
            value={dealText}
            onChange={handleTextChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Начало аренды"
            type="date"
            variant="outlined"
            value={startDate}
            onChange={handleStartDateChange}
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
            value={endDate}
            onChange={handleEndDateChange}
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

