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
  const [isEditing, setIsEditing] = React.useState(false);
  const [editedField, setEditedField] = React.useState('');
  const [editedUser, setEditedUser] = React.useState({ ...user });

  const handleEdit = (field: string) => {
    setEditedField(field);
    setIsEditing(true);
  };

  const handleSave = () => {
    // Добавьте здесь логику для сохранения измененных данных пользователя
    // Например, вызов функции, которая сохраняет editedUser
    // saveEditedUserData(editedUser);

    // Для примера сбрасываем состояния после сохранения
    setEditedField('');
    setIsEditing(false);
  };

  return (
    
    <Container>
      <Typography variant='h5'  sx={{ display: 'flex', justifyContent: 'center'}}> Учетные данные</Typography>
      <Card sx={{ display: 'flex' }}>
        {/* Аватар и кнопка для его загрузки */}
        <Box sx={{ display: 'flex', flexDirection: 'column', marginRight: '80px'}}>
          <CardMedia
            component="img"
            sx={{ width: 150 }}
            image="/img/vite.svg"
            alt="avatar"
          />
          <Button size="small" color="primary">
            Загрузить фото
          </Button>
        </Box>

        {/* Блок отображения данных пользователя */}
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Typography
            variant="h6"
            component="div"
            gutterBottom
            color="textSecondary"
            style={{ marginTop: '40px' }}
          >
            Учетные данные
          </Typography>

          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            <Grid item xs={2} sm={6} md={6}>
              {isEditing && editedField === 'name' ? (
                <TextField
                  value={editedUser.name}
                  onChange={(e) => setEditedUser({ ...editedUser, name: e.target.value })}
                />
              ) : (
                <>
                  <Typography>Имя: {user.name}</Typography>
                  <Button onClick={() => handleEdit('name')}>Редактировать</Button>
                </>
              )}
            </Grid>


            <Grid item xs={2} sm={6} md={6}>
              {isEditing && editedField === 'nickName' ? (
                <TextField
                  value={editedUser.nickName}
                  onChange={(e) => setEditedUser({ ...editedUser, nickName: e.target.value })}
                />
              ) : (
                <>
                  <Typography>Никнейм: {user.nickName}</Typography>
                  <Button onClick={() => handleEdit('nickName')}>Редактировать</Button>
                </>
              )}
            </Grid>


            <Grid item xs={2} sm={6} md={6}>
              {isEditing && editedField === 'about' ? (
                <TextField
                  value={editedUser.about}
                  onChange={(e) => setEditedUser({ ...editedUser, about: e.target.value })}
                />
              ) : (
                <>
                  <Typography>Обо мне: {user.about}</Typography>
                  <Button onClick={() => handleEdit('about')}>Редактировать</Button>
                </>
              )}
            </Grid>


            <Grid item xs={2} sm={6} md={6}>
              {isEditing && editedField === 'phone' ? (
                <TextField
                  value={editedUser.phone}
                  onChange={(e) => setEditedUser({ ...editedUser, phone: e.target.value })}
                />
              ) : (
                <>
                  <Typography>Телефон: {user.phone}</Typography>
                  <Button onClick={() => handleEdit('phone')}>Редактировать</Button>
                </>
              )}
            </Grid>


            <Grid item xs={2} sm={6} md={6}>
              {isEditing && editedField === 'city' ? (
                <TextField
                  value={editedUser.city}
                  onChange={(e) => setEditedUser({ ...editedUser, city: e.target.value })}
                />
              ) : (
                <>
                  <Typography>Город: {user.city}</Typography>
                  <Button onClick={() => handleEdit('city')}>Редактировать</Button>
                </>
              )}
            </Grid>


            <Grid item xs={2} sm={6} md={6}>
              {isEditing && editedField === 'metro' ? (
                <TextField
                  value={editedUser.metro}
                  onChange={(e) => setEditedUser({ ...editedUser, metro: e.target.value })}
                />
              ) : (
                <>
                  <Typography>Метро: {user.metro}</Typography>
                  <Button onClick={() => handleEdit('metro')}>Редактировать</Button>
                </>
              )}
            </Grid>
            

           
            {/* Повторите этот блок для каждого поля */}
          </Grid>

          {/* Добавьте кнопку "Сохранить" */}
          {isEditing && (
            <Button onClick={handleSave}>Сохранить</Button>
          )}
        </Box>
      </Card>
    </Container>
    
  );
}
