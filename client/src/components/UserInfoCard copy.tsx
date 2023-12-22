import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import { Button, Rating } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../redux/hook';
import { clearCurrentItem } from '../redux/slices/items/itemsSlice';

export default function UserInfoCard(): JSX.Element {
  const dispatch = useAppDispatch();
  const reviews = useAppSelector((state) => state.reviewsSlice.reviews);
  const currentItem = useAppSelector((state) => state.itemsSlice.currentItem);
  // below user = owner
  // console.log('___>>>>>reviews',reviews);
  const user = currentItem?.ownerDetails;
  const currentReviews = reviews.filter((el) => el.userId === user?.id);
  let sum = 0;
  currentReviews.forEach((el) => {
    sum += el.rating;
  });
  // console.log('___>>>>>sum',sum);
  const rating = currentReviews.length > 0 ? sum / currentReviews.length : 3;

  const registerDate = format(new Date(user.createdAt), 'd MMM yyyy', { locale: ru });

  return (
    <Card sx={{ display: 'flex',flexDirection: 'column', alignItems:'center' }}>
      <Box sx={{ display: 'flex' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography variant="body2" color="text.secondary" sx={{ paddingTop: '10px' }}>
            Имя:
          </Typography>
          <Typography variant="h5">{user?.name}</Typography>
          <Typography variant="body2" color="text.secondary" sx={{ paddingTop: '10px' }}>
            О себе:
          </Typography>
          <Typography variant="h5">{user?.about}</Typography>
          <Typography variant="body2" color="text.secondary" sx={{ paddingTop: '10px' }}>
            Город:
          </Typography>

          <Typography variant="h5">{user?.city}</Typography>
          <Typography variant="body2" color="text.secondary" sx={{ paddingTop: '10px' }}>
            Метро:
          </Typography>
          <Typography variant="h5">{user?.metro}</Typography>
          <Typography variant="body2" color="text.secondary" sx={{ paddingTop: '10px' }}>
            На сайте с:{' '}
          </Typography>
          <Typography variant="h5">{registerDate}</Typography>
          <Typography variant="body2" color="text.secondary" sx={{ paddingTop: '10px' }}>
            Рейтинг на основе оценок пользователей
          </Typography>
          <Rating name="read-only" value={rating} readOnly />
        </CardContent>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', paddingTop:'20px' }}>
        <Avatar alt="Аватар" src={user?.avatar} sx={{ width: 150, height: 150 }} />
      </Box>
      </Box>
        <Button color="inherit" onClick={() => dispatch(clearCurrentItem())}>
          Закрыть
        </Button>

      {/* <CardMedia
        component="img"
        sx={{ width: '30%', objectFit: 'cover', maxWidth: '30%', height: 'auto' }} 
        image={user?.avatar}
        alt="Аватар"
        /> */}
    </Card>
  );
}
