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
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../redux/hook';
import { addFavItem } from '../redux/slices/items/itemsSlice';
import type { ItemType } from '../types/item/item';

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

function ItemCard({ item }: { item: ItemType }): JSX.Element {
  const [expanded, setExpanded] = React.useState(false);

//   Для добавления favorites
  const [isFavorite, setIsFavorite] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const dispatch = useAppDispatch();
  // const handleAddDeal = () => {
  //   window.location = `/addDeal/${item.id}`;
  // };


  //   Для добавления favorites
  const handleAddToFavorites = () => {
    dispatch(addFavItem(item));
    setIsFavorite(true);
  };

  return (
    <Link to={`/addDeal/${item?.id}`}>
    <Card style={{ marginTop: '30px', borderRadius: '17px', padding: '9px' }}>
      <CardContent>
        <Typography
          variant="h4"
          component="div"
          style={{ textAlign: 'center' }}
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
        {/* <Carousel> */}
          <div>
            <CardMedia component="img" height="350" width="350"image={`http://localhost:3000/img/${item.img1}`} alt="cover" />
          </div>
          {/* <div>
            <CardMedia component="img" height="176" image={item.img2} alt="cover" />
          </div>
          <div>
            <CardMedia component="img" height="176" image={item.img3} alt="cover" />
          </div> */}
        {/* </Carousel> */}
        <Typography variant = "h6" color="text.secondary" sx = {{ marginTop: '30px' }}>Описание: {item.description}</Typography>
        <Divider />
        <Typography variant = "h6"color="text.secondary">Состояние: {item.condition}</Typography>
        <Typography variant = "h6" color="text.secondary">Статус: {item.status}</Typography>
        <Typography variant = "h6" color="text.secondary">Цена: {item.price}</Typography>
        {/* <Typography color="text.secondary">{item.id}</Typography> */}
      </CardContent>
      <CardActions style={{ display: 'flex', justifyContent: 'center' }}>
        <Button 
        // onClick={handleAddDeal} 
        size="medium" color="success" variant="contained">
          На сделку
        </Button>
      </CardActions>
    </Card>
    </Link>
  );
}

export default ItemCard;
