import React from 'react';
import {
    Card,
    CardContent,
    CardActions,
    Button,
    Typography,
    Divider,
    IconButtonProps,
    IconButton,
    CardMedia
} from '@mui/material';
import { useAppDispatch } from '../redux/hook';
import styled from "styled-components";

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
        setExpanded(!expanded);
    };
    const dispatch = useAppDispatch();

    const handleAddDeal = () => {
        window.location = '/subcats/items';
    }
    return (
        <Card style={{ marginTop: '30px' }}>
            <CardContent>
                <Typography variant="h5" component="div">
                    {item.title}
                </Typography>
                <CardMedia component="image"
                           height="194"
                           image={item.img1}
                           alt="cover"
                           />
                <Typography color="text.secondary">Description: {item.description}</Typography>
                <Divider />
                <Typography color="text.secondary">Condition: {item.condition}</Typography>
                <Typography color="text.secondary">Status: {item.status}</Typography>
                <Typography color="text.secondary">Price: {item.price}</Typography>
            </CardContent>
            <CardActions>
                <Button onClick={handleAddDeal} size="small" color="primary">
                    razmap
                </Button>
            </CardActions>
        </Card>
    );
}

export default ItemCard;
