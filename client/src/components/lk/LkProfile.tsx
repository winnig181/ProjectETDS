import * as React from 'react';
import {
  Box,
  Button,
  Card,
  CardMedia,
  Container,
  Grid,
  TextField,
  Typography,
} from '@mui/material';
import { NavLink } from 'react-router-dom';
import { useAppSelector } from '../../redux/hook';
import type { UserType } from '../../types/auth';

export default function LkProfile(): JSX.Element {
  const user: UserType = useAppSelector((state) => state.authSlice.user);

  return (
    <Container
      sx={{
        width: 900,
        padding: '20px',
      }}
      maxWidth="md"
    >
      <Typography
        variant="h4"
        sx={{ alignSelf: 'center', marginBottom: '30px', paddingTop: '30px' }}
      >
        Учетные данные
      </Typography>

      <Box
        sx={{
          display: 'flex',
          alignItems: 'flex-start',
          gap: '30px',
          paddingTop: '20px',
          paddingBottom: '40px',
          marginRight: '80px',
        }}
      >
        <CardMedia component="img" sx={{ width: 125 }} image="/img/vite.svg" alt="avatar" />
        <Button type="submit" variant="contained" color="primary">
          Загрузить фото
        </Button>
      </Box>

      {/* Блок отображения данных пользователя */}
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <form>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                name="name"
                value={user.name}
                // onChange={handleChange}
                fullWidth
                label="Имя"
                variant="outlined"
                required
                disabled
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="nickName"
                value={user.nickName}
                // onChange={handleChange}
                fullWidth
                label="Ник"
                variant="outlined"
                required
                disabled
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="about"
                value={user.about}
                // onChange={handleChange}
                fullWidth
                label="Обо мне:"
                variant="outlined"
                multiline
                rows={2}
                required
                disabled
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                name="phone"
                value={user.phone}
                // onChange={handleChange}
                fullWidth
                label="Телефон:"
                variant="outlined"
                required
                disabled
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                name="city"
                value={user.city}
                // onChange={handleChange}
                fullWidth
                label="Город:"
                variant="outlined"
                required
                disabled
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                name="metro"
                value={user.metro}
                // onChange={handleChange}
                fullWidth
                label="Метро:"
                variant="outlined"
                required
                disabled
              />
            </Grid>
            <Grid item xs={12} sx={{ marginTop: '20px' }}>
              <Button type="submit" variant="contained" color="primary">
                Редактировать
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Container>
  );
}
