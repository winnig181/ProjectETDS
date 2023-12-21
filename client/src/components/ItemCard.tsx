import React from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import {
    Card,
    CardContent,
    CardActions,
    Button,
    Typography,
    Divider,
    IconButtonProps,
    IconButton,
    CardMedia, Container
} from '@mui/material';
import { useAppDispatch } from '../redux/hook';
import styled from "styled-components"
import Carousel from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
}

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
    const handleExpandClick = () => {
        setExpanded(!expanded)
    }
    const dispatch = useAppDispatch();
    const handleAddDeal = () => {
        window.location = `/addDeal/${item.id}`
    }
    // const handlerAddToFavorite = () => {
    // } // handler for Add to Favorite Button

    return (
        <Card style={{ marginTop: '30px', borderRadius: '17px', padding: '9px' }}>
            <CardContent>
                <Typography variant="h5" component="div" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    {item.title}
                    <IconButton aria-label="add to favorites" style={{ color: 'purple' }}>
                        <FavoriteIcon />
                    </IconButton>
                </Typography>
                <Carousel>
                    <div>
                        <CardMedia component="img" height="176" image={item.img1} alt="cover" />
                    </div>
                    <div>
                        <CardMedia component="img" height="176" image={item.img2} alt="cover" />
                    </div>
                    <div>
                        <CardMedia component="img" height="176" image={item.img3} alt="cover" />
                    </div>
                </Carousel>
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

    )
}

export default ItemCard;
