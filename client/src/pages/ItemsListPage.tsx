import React from 'react';
import {useParams} from 'react-router-dom'
import { Container, Grid, Typography } from '@mui/material'
import { useAppDispatch, useAppSelector } from '../redux/hook'
import ItemCard from '../components/ItemCard'
import {thunkItemsLoad} from "../redux/slices/items/createAsyncThunk"


export default function ItemsListPage(): JSX.Element {
    const dispatch = useAppDispatch();
    const items = useAppSelector((state) => state.itemsSlice.items)
    const {id} = useParams()

    React.useEffect(() => {
            void dispatch(thunkItemsLoad())
    }, [dispatch])

    const filteredItems = items.filter((item) => !item.hidden && item.id === id)

    return (
        <Container sx={{ backgroundColor: 'background.default', minHeight: '100vh' }}>
            <Typography variant="h3" gutterBottom sx={{ textAlign: 'center' }}>
                предметы здеся:
            </Typography>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 3, sm: 8, md: 12 }}>
                { filteredItems.map((item) => (
                        <Grid item xs={2} sm={6} md={6} key={item.id}>
                            <ItemCard item={item} />
                        </Grid> ))}
            </Grid>
        </Container>
    );
}
