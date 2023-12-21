import React, { useState } from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import type { IconButtonProps } from '@mui/material';
import {
  Card,
  CardContent,
  CardActions,
  Button,
  Typography,
  Divider,
  IconButton,
  CardMedia,
} from '@mui/material';
import styled from 'styled-components';
import Carousel from 'react-slick';
import { useAppDispatch } from '../redux/hook';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { addFavItem } from '../redux/slices/items/itemsSlice';

type ExpandMoreProps = {
  expand: boolean;
} & IconButtonProps;

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

function ItemCard({ item }: { item: any }): JSX.Element {
  const [expanded, setExpanded] = React.useState(false);

//   Для добавления favorites
  const [isFavorite, setIsFavorite] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const dispatch = useAppDispatch();
  const handleAddDeal = () => {
    window.location = `/addDeal/${item.id}`;
  };


  //   Для добавления favorites
  const handleAddToFavorites = () => {
    dispatch(addFavItem(item));
    setIsFavorite(true);
  };

  return (
    <Card style={{ marginTop: '30px', borderRadius: '17px', padding: '9px' }}>
      <CardContent>
        <Typography
          variant="h5"
          component="div"
          style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
        >
          {item.title}

          {/* //   Изменила Для добавления favorites */}
          <IconButton
            aria-label="add to favorites"
            style={{ color: isFavorite ? 'red' : 'white' }}
            onClick={handleAddToFavorites}
          >
            <FavoriteIcon />
          </IconButton>


        </Typography>
        <CardMedia component="img" height="176" image={item.img1} alt="cover" />
        <Typography color="text.secondary">Описание: {item.description}</Typography>
        <Divider />
        <Typography color="text.secondary">Состояние: {item.condition}</Typography>
        <Typography color="text.secondary">Статус: {item.status}</Typography>
        <Typography color="text.secondary">Цена: {item.price}</Typography>
        <Typography color="text.secondary">{item.id}</Typography>
      </CardContent>
      <CardActions style={{ display: 'flex', justifyContent: 'center' }}>
        <Button onClick={handleAddDeal} size="medium" color="success" variant="contained">
          На сделку
        </Button>
      </CardActions>
    </Card>
  );
}

export default ItemCard;
