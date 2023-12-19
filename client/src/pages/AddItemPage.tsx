import React, { useState } from 'react';
import {
  Container,
  TextField,
  Button,
  Grid,
  Button,
  FormControl,
  MenuItem,
  TextField,
} from '@mui/material';
import { useAppDispatch } from '../redux/hook';
import type { AddItemFormData } from '../types/item/item';
import { thunkAddNote } from '../redux/slices/notes/thunkActions';

function AddItemPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const [status, setStatus] = useState('available');
  const handleStatus = (event: React.ChangeEvent<{ value: unknown }>): void => {
    setStatus(event.target.value as string);
  };

  return (
    <Container maxWidth="md">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const formData = Object.fromEntries(
            new FormData(e.currentTarget),
          ) as unknown as AddItemFormData;
          formData.status = status; 
          formData.hidden = Boolen(false);
          void dispatch(thunkAddItem(formData));
          e.currentTarget.reset();
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField name="title" fullWidth label="Название предмета*" variant="outlined" />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="price"
              fullWidth
              label="Цена в рублях за сутки аренды кратная 10 или 0*"
              type="number"
              variant="outlined"
              // InputLabelProps={{
              //   shrink: true,
              // }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField name="description" fullWidth label="Описание*" variant="outlined" />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="condition"
              fullWidth
              label="Состояние (новое / как новое / рабочее / требует ремонта) "
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="status"
              fullWidth
              label="Статус"
              variant="outlined"
              id="select"
              value={status}
              onChange={handleStatus}
              select
            >
              <MenuItem value="available">доступен</MenuItem>
              <MenuItem value="ordered">арендован</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="hidden"
              fullWidth
              label="Скрыть"
              variant="outlined"
              id="select"
              value={hidden}
              onChange={handleHidden}
              select
            >
              <MenuItem value="false">показывать</MenuItem>
              <MenuItem value="true">скрыть</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="subCategoryId"
              fullWidth
              label="Скрыть"
              variant="outlined"
              id="select"
              value={subcat}
              onChange={handleSubcat}
              select
            >
              <MenuItem value="1">Видеоигры</MenuItem>
              <MenuItem value="2">Музыка</MenuItem>
              <MenuItem value="3">Подушки</MenuItem>
            </TextField>
          </Grid>

          <Grid item xs={12}>
            <Button variant="contained" color="primary" onClick={handleAddDeal}>
              Добавить
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}

export default AddItemPage;
