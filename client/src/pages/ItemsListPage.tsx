/* eslint-disable react/jsx-no-useless-fragment */
import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../redux/hook';
import ItemCard from '../components/ItemCard';
import {thunkItemsLoad} from "../redux/slices/items/createAsyncThunk";

export default function ItemsListPage(): JSX.Element {
    const dispatch = useAppDispatch();
    const items = useAppSelector((state) => state.itemsSlice.items)
    console.log(items, '<--------------oops')
    React.useEffect(() => {
            void dispatch(thunkItemsLoad());
    }, []);
    return (
        <Container sx={{ backgroundColor: 'background.default', minHeight: '100vh' }}>
            <Typography variant="h3" gutterBottom sx={{ textAlign: 'center' }}>
                предметы здеся:
            </Typography>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 3, sm: 8, md: 12 }}>
                { items.map((item) => ( !item.hidden && (
                        <Grid item xs={2} sm={6} md={6} key={item.id}>
                            <ItemCard item={item} />
                        </Grid> )))}
            </Grid>
        </Container>
    );
}
