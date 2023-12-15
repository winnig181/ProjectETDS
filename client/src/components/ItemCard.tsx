import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Carousel from 'react-material-ui-carousel';
const imagesContext = require.context('./client/src/assets/testPics', false, /\.(png|jpe?g|svg)$/)

// don't forget to install carousel packet

export default function ItemCard() {
    const images = imagesContext.keys().map(imagesContext);
    return (
        <Card sx={{ maxWidth: 360 }}>
            <Carousel>
                {images.map((image, index) => (
                    <CardMedia
                        key={index}
                        sx={{ height: 140 }}
                        image={image}
                        title={`Image ${index + 1}`}
                    />
                ))}
            </Carousel>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    ItemItem
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Items are everywhere except Antarctica
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
}
