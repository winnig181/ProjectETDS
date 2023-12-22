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
import { clearCurrentOwnerDeal } from '../redux/slices/ownerdeals/ownerDealsSlice';

export default function UserInfoCard(): JSX.Element {
  const dispatch = useAppDispatch();
  const reviews = useAppSelector((state) => state.reviewsSlice.reviews);
  const currentOwnerDeal = useAppSelector((state) => state.ownerDealsSlice.currentOwnerDeal);
  

  // console.log('___>>>>>currentOwnerDeal',currentOwnerDeal);
  const tenant = currentOwnerDeal?.tenantDetails;
  // const currentReviews = reviews.filter((el) => el.userId === tenant?.id);
  // console.log('___>>>>>currentReviews',currentReviews);
  // let sum = 0;
  // currentReviews.forEach((el) => {
  //   sum += el.rating;
  // });
  // // console.log('___>>>>>sum',sum);
  // const rating = currentReviews.length > 0 ? sum / currentReviews.length : 4;
  const rating = 4;

  const registerDate = format(new Date(tenant.createdAt), 'd MMM yyyy', { locale: ru });

  return (
    <Card sx={{ display: 'flex',flexDirection: 'column', alignItems:'center' }}>
      <Box sx={{ display: 'flex' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography variant="body2" color="text.secondary" sx={{ paddingTop: '10px' }}>
            Имя:
          </Typography>
          <Typography variant="h6">{tenant?.name}</Typography>
          <Typography variant="body2" color="text.secondary" sx={{ paddingTop: '10px' }}>
            О себе:
          </Typography>
          <Typography variant="h6">{tenant?.about}</Typography>
          <Typography variant="body2" color="text.secondary" sx={{ paddingTop: '10px' }}>
            Город:
          </Typography>

          <Typography variant="h6">{tenant?.city}</Typography>
          <Typography variant="body2" color="text.secondary" sx={{ paddingTop: '10px' }}>
            Метро:
          </Typography>
          <Typography variant="h6">{tenant?.metro}</Typography>
          <Typography variant="body2" color="text.secondary" sx={{ paddingTop: '10px' }}>
            На сайте с:{' '}
          </Typography>
          <Typography variant="h6">{registerDate}</Typography>
          <Typography variant="body2" color="text.secondary" sx={{ paddingTop: '10px' }}>
            Рейтинг на основе оценок пользователей
          </Typography>
          <Rating name="read-only" value={rating} readOnly />
        </CardContent>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', paddingTop:'20px', paddingRight:'20px' }}>
        <Avatar alt="Аватар" src={tenant?.avatar} sx={{ width: 75, height: 75 }} />
      </Box>
      </Box>
      <Button color="success"> Связаться </Button>
        <Button color="inherit" onClick={() => dispatch(clearCurrentOwnerDeal())}>
          Закрыть
        </Button>

    </Card>
  );
}
