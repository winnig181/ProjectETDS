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
  const [status, setStatus] = useState('available');
  const [hidden, setHidden] = useState(false);
  const [subcat, setSubcat] = useState(1);
  // const [fileInputs, setFileInputs] = useState<(FileList | null)[]>([null, null, null]); 

  const handleStatus = (event: React.ChangeEvent<{ value: unknown }>): void => {
    setStatus(event.target.value as string);
  };

  const handleHidden = (event: React.ChangeEvent<{ value: unknown }>): void => {
    setHidden(event.target.value === 'true');
  };

  const handleSubcat = (event: React.ChangeEvent<{ value: unknown }>): void => {
    setSubcat(Number(event.target.value));
  };

  // const handleFileChange = (index: number, files: FileList | null): void => {
  //   setFileInputs((prevInputs) => prevInputs.map((item, i) => (i === index ? files : item)));
  // };
  // const handleSubmit = (e: React.FormEvent): void => {
  //   e.preventDefault();
    // const formData = Object.fromEntries(
    //   new FormData(e.currentTarget),
    // ) as unknown as AddItemFormData;
    // formData.status = status;
    // formData.hidden = hidden;
    // formData.subCategoryId = +subcat;
    // console.log('formData>>>>', formData);

    // console.log(fileInputs);

    
    const handleSubmit = (e: React.FormEvent): void => {
      e.preventDefault();
      console.log('e.currentTarget.files.files>>>>',e.currentTarget.files.files);
      // const formData = new FormData();
      const formData = Object.fromEntries(
        new FormData(e.currentTarget),
      ) as unknown as AddItemFormData;
      formData.status = status;
      formData.hidden = hidden;
      formData.subCategoryId = +subcat;
    for (const file of e.currentTarget.files.files) {
      formData.append('files', file);
    }
    // formData.append('status', status);
    // formData.append('hidden', String(hidden));
    // formData.append('subCategoryId', String(subcat));


    console.log('formData>>>>',formData);

    void dispatch(thunkItemsAdd(formData));
    e.currentTarget.reset();
    setAdd(!add);
  };

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
          <form encType="multipart/form-data" onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField name="title" fullWidth label="Название предмета*" variant="outlined" />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="price"
                  fullWidth
                  label="Цена в рублях за сутки аренды или 0*"
                  type="text"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="description"
                  fullWidth
                  label="Описание предмета"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="condition"
                  fullWidth
                  label="Состояние* (новое / как новое / рабочее / требует ремонта) "
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  name="status"
                  fullWidth
                  label="Статус*"
                  variant="outlined"
                  id="select"
                  value={status}
                  onChange={handleStatus}
                  select
                >
                  <MenuItem value="available">Доступен</MenuItem>
                  <MenuItem value="ordered">Арендован</MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  name="hidden"
                  fullWidth
                  label="Скрыть*"
                  variant="outlined"
                  id="select"
                  value={hidden}
                  onChange={handleHidden}
                  select
                >
                  <MenuItem value="false">Показывать</MenuItem>
                  <MenuItem value="true">Скрыть</MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="subCategoryId"
                  fullWidth
                  label="Выберите подкатегорию*"
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

              <input name="files" type="file" multiple />
              {/* {fileInputs.map((_, index) => (
                <Grid item xs={4} key={index}>
                  <input
                    type="file"
                    name={`img${index + 1}`}
                    accept="image/*"
                    // style={{ display: 'none' }}
                    onChange={(e) => handleFileChange(index, e.target.files)}
                  /> */}
              {/* <Button
                    variant="contained"
                    color="primary"
                    component="label"
                    htmlFor={`img${index + 1}`}
                  > */}
              {/* Загрузить фото* */}
              {/* </Button> */}
              {/* </Grid> */}
              {/* ))} */}
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ paddingLeft: '20px', paddingTop: '10px' }}
              >
                * отмечены обязательные для заполнения поля
              </Typography>
              <Grid item xs={12} sx={{ marginBottom: '20px' }}>
                <Button variant="contained" color="primary" type="submit">
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
