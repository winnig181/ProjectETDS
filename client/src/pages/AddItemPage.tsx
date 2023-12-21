import React, { useState } from 'react';
import {
  Container,
  TextField,
  Button,
  Grid,
  MenuItem,
  Typography,
  Alert,
  Stack,
} from '@mui/material';
import { useAppDispatch } from '../redux/hook';
import type { AddItemFormData } from '../types/item/item';
import { thunkItemsAdd } from '../redux/slices/items/createAsyncThunk';

function AddItemPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const [add, setAdd] = useState(true);
  const [itemData, setItemData] = useState<AddItemFormData>({
    title: '',
    description: '',
    condition: '',
    subCategoryId: 1,
    status: 'available',
    hidden: false,
    price: 0,
  });

  const handleChange = (e: React.ChangeEvent<{ value: unknown }>): void => {
    const { name, value, type, checked } = e.target;
    setItemData({
      ...itemData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const formData = new FormData();
    for (const file of e.currentTarget.files.files) {
      formData.append('files', file);
    }
    formData.append('title', itemData.title);
    formData.append('description', itemData.description);
    formData.append('condition', itemData.condition);
    formData.append('status', itemData.status);
    formData.append('hidden', Boolean(itemData.hidden));
    formData.append('subCategoryId', itemData.subCategoryId);
    formData.append('price', itemData.price);
    console.log('formData>>>>', formData);

    void dispatch(thunkItemsAdd(formData));
    setItemData({
      title: '',
      description: '',
      condition: '',
      subCategoryId: 1,
      status: 'available',
      hidden: false,
      price: 0,
    });
    setAdd(!add);
  };

  const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });

  return (
    <Container maxWidth="md">
      {add ? (
        <>
          <Typography
            variant="h4"
            sx={{ alignSelf: 'center', marginBottom: '30px', paddingTop: '30px' }}
          >
            Разместить предмет на сайте
          </Typography>
          <form encType="multipart/form-data" onSubmit={submitHandler}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  name="title"
                  value={itemData.title}
                  onChange={handleChange}
                  fullWidth
                  label="Название предмета"
                  variant="outlined"
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="price"
                  value={itemData.price}
                  onChange={handleChange}
                  fullWidth
                  label="Цена в рублях за сутки аренды или 0"
                  type="text"
                  variant="outlined"
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="description"
                  value={itemData.description}
                  onChange={handleChange}
                  fullWidth
                  label="Описание предмета"
                  variant="outlined"
                  multiline
                  rows={2}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="condition"
                  value={itemData.condition}
                  onChange={handleChange}
                  fullWidth
                  label="Состояние (новое / как новое / рабочее / требует ремонта)"
                  variant="outlined"
                  required
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  name="status"
                  value={itemData.status}
                  onChange={handleChange}
                  fullWidth
                  label="Статус"
                  variant="outlined"
                  id="select"
                  select
                >
                  <MenuItem value="available">Доступен</MenuItem>
                  <MenuItem value="ordered">Арендован</MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  name="hidden"
                  value={itemData.hidden}
                  onChange={handleChange}
                  fullWidth
                  label="Скрыть"
                  variant="outlined"
                  id="select"
                  select
                >
                  <MenuItem value="false">Показывать</MenuItem>
                  <MenuItem value="true">Скрыть</MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="subCategoryId"
                  value={itemData.subCategoryId}
                  onChange={handleChange}
                  fullWidth
                  label="Выберите подкатегорию"
                  variant="outlined"
                  id="select"
                  select
                >
                  <MenuItem value="1">Видеоигры</MenuItem>
                  <MenuItem value="2">Музыка</MenuItem>
                  <MenuItem value="3">Подушки</MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={12} sx={{ paddingLeft: '10px', paddingTop: '10px' }}>
                {/* <input name="files" type="file" multiple /> */}

                <Button component="label" variant="contained" startIcon={<CloudUploadIcon />}
                // изменение цвета кнопки - по умолчанию был черный
                sx={{
                  color: 'white', // Set the text color
                  backgroundColor: '#8a8a8a', // Set the background color
                  '&:hover': {
                    backgroundColor: '#1565C0', // Change the background color on hover
                  },
                }}
              >
                  Выбрать изображение*
                  <VisuallyHiddenInput id="files" name="files" type="file" multiple />
                </Button>
              </Grid>

              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ paddingLeft: '20px', paddingTop: '10px' }}
              >
                * отмечены обязательные для заполнения поля
              </Typography>

              <Grid item xs={12} sx={{ marginTop: '20px' }}>
                <Button type="submit" variant="contained" color="primary">
                  Добавить
                </Button>
              </Grid>
            </Grid>
          </form>
        </>
      ) : (
        <Stack sx={{ width: '100%' }} spacing={2}>
          <Alert
            onClose={() => {
              setAdd(!add);
            }}
          >
            Добавление прошло успешно!
          </Alert>
        </Stack>
      )}
    </Container>
  );
}

export default AddItemPage;
