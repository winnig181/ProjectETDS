import React from "react";
import { Container, Grid, Typography } from '@mui/material';
import ItemCard from "../components/ItemCard";
import {useAppDispatch, useAppSelector} from "../redux/hook";
import CategoryCard from "../components/CategoryCard";

export default function ItemsListPage(): JSX.Element {
    const items = useAppSelector((store) => store.itemsSlice.items)
    const dispatch = useAppDispatch()
    return (
        <Container>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {items.map((category) => (
                    <Grid item xs={2} sm={4} md={4} key={category.id}>
                        <CategoryCard category = {category} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}
