import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {CardMedia} from "@mui/material";
import {ItemType} from "../types/item/item";

// don't forget to install carousel packet
type ItemTypeProps = {
    item: ItemType
}

const item = {
    title: 'Playgame',
    description: 'Heroes of Might and Magic 3',
    img1:'aaa',
    img2:'bbb',
    img3:'ccc',
    condition:'used',
    status:'ordered',
    hidden: false,
    subCategoryId: 1,
    userId: 1,
    price: 35,
    createdAt: new Date(),
    updatedAt: new Date()
}

export default function ItemCard(item) {
    return (
        <Card sx={{ maxWidth: 360 }}>
            <CardMedia sx={{height: 300}} image={item.img1} title="item" />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {item.title}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Add to favorite</Button>
                <Button size="small">Open the description</Button>

                {/*<Typography variant="body2" color="text.secondary">*/}
                {/*    {item.description}*/}
                {/*</Typography>*/}
                {/*<Typography variant="body2" color="text.secondary">*/}
                {/*    {item.condition}*/}
                {/*</Typography>*/}
                {/*<Typography variant="body2" color="text.secondary">*/}
                {/*    {item.price}*/}
                {/*</Typography>*/}

            </CardActions>
        </Card>
    );
}
