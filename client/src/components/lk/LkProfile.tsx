// import * as React from 'react';

// import Typography from '@mui/material/Typography';
// import { Box, Button, Card, CardMedia, Container, Grid } from '@mui/material';
// import { NavLink } from 'react-router-dom';
// import { useAppSelector } from '../../redux/hook';
// import type { UserType } from '../../types/auth';

// // type PropsLkCard = {
// //   text: string;
// // }

// export default function LkProfile(): JSX.Element {
//   const user:UserType = useAppSelector((state) => state.authSlice.user);
//   console.log('user', user);
//   const {name, nickName, email, phone, about, avatar, city, metro, publicPhone, isActivated} = user;
//   return (
//     <Container>
//       <Card sx={{ display: 'flex' }}>
//         {/* Надо сделать ширину 30% контейнера на 70% */}
//         <Box sx={{ display: 'flex', flexDirection: 'column' }}>
//           <CardMedia
//             component="img"
//             sx={{ width: 100 }}
//             image="/img/vite.svg"
//             alt="avatar"
//           />
//           <Button size="small" color="primary">
//             Загрузить фото
//           </Button>
//         </Box>

//         <Box sx={{ display: 'flex', flexDirection: 'column' }}>
//           <Typography
//             variant="h6"
//             component="div"
//             gutterBottom
//             color="textSecondary"
//             style={{ marginTop: '40px' }}
//           >
//             Учетные данные
//           </Typography>
//           <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
//             <Grid item xs={2} sm={6} md={6}>
//               <p>Имя: {name}</p>
//             </Grid>
//             <Grid item xs={2} sm={6} md={6}>
//               <p>Email: {email}</p>
//             </Grid>
//             <Grid item xs={2} sm={6} md={6}>
//               <p>
//                 {isActivated
//                   ? 'Email подтвержден'
//                   : `Email пока не подтвержден`}
//               </p>
//             </Grid>

//           </Grid>

//           <Typography
//             variant="h6"
//             component="div"
//             gutterBottom
//             color="textSecondary"
//             style={{ marginTop: '40px' }}
//           >
//             Публичные данные
//           </Typography>
//           <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
//             <Grid item xs={2} sm={6} md={6}>
//               <p>Ник: {nickName}</p>
//             </Grid>
//             <Grid item xs={2} sm={6} md={6}>
//               <p>Email: {email}</p>
//             </Grid>
//             <Grid item xs={2} sm={6} md={6}>
//               <p>Обо мне: {about}</p>
//             </Grid>
//             <Grid item xs={2} sm={6} md={6}>
//               <p>Телефон: {phone}</p>
//             </Grid>
//             <Grid item xs={2} sm={6} md={6}>
//               <p>Город: {city}</p>
//             </Grid>
//             <Grid item xs={2} sm={6} md={6}>
//               <p>Станция метро: {metro}</p>
//             </Grid>
//             <Grid item xs={2} sm={6} md={6}>
//               <NavLink to="#">
//                 <p>Изменить / дополнить личные данные </p>
//               </NavLink>
//             </Grid>
//           </Grid>
//         </Box>
//       </Card>
//     </Container>
//   );
// }


///////////////////////////////////////////////////////////////////////////////
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
      <Card sx={{ display: 'flex' }}>
        {/* Аватар и кнопка для его загрузки */}
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <CardMedia
            component="img"
            sx={{ width: 100 }}
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
              {isEditing && editedField === 'name' ? (
                <TextField
                  value={editedUser.email}
                  onChange={(e) => setEditedUser({ ...editedUser, email: e.target.value })}
                />
              ) : (
                <>
                  <Typography>Email: {user.email}</Typography>
                  <Button onClick={() => handleEdit('name')}>Редактировать</Button>
                </>
              )}
            </Grid>
            <Grid item xs={2} sm={6} md={6}>
              {isEditing && editedField === 'name' ? (
                <TextField
                  value={editedUser.about}
                  onChange={(e) => setEditedUser({ ...editedUser, about: e.target.value })}
                />
              ) : (
                <>
                  <Typography>Обо мне: {user.about}</Typography>
                  <Button onClick={() => handleEdit('name')}>Редактировать</Button>
                </>
              )}
            </Grid>
            <Grid item xs={2} sm={6} md={6}>
              {isEditing && editedField === 'name' ? (
                <TextField
                  value={editedUser.phone}
                  onChange={(e) => setEditedUser({ ...editedUser, phone: e.target.value })}
                />
              ) : (
                <>
                  <Typography>Телефон: {user.phone}</Typography>
                  <Button onClick={() => handleEdit('name')}>Редактировать</Button>
                </>
              )}
            </Grid>
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
            </Grid><Grid item xs={2} sm={6} md={6}>
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
            </Grid><Grid item xs={2} sm={6} md={6}>
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
            </Grid><Grid item xs={2} sm={6} md={6}>
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
            </Grid><Grid item xs={2} sm={6} md={6}>
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
