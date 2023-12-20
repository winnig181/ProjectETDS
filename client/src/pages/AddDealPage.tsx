import React from 'react'
import { Container, Grid } from '@mui/material'
import AddDealForm from '../components/AddDealForm'
import { useAppDispatch, useAppSelector } from '../redux/hook'
import ItemCard2 from '../components/ItemCard2'



export default function AddDealPage(): JSX.Element {

  const dispatch = useAppDispatch()
  const items = useAppSelector((store) => store.itemsSlice.items)
 console.log(items, "items on front");
 
 


  return (
    <Container>
      <AddDealForm />
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {items.map((item) => (
        <Grid item xs={2} sm={4} md={4} key={item.id}>
       <ItemCard2 item = {item} />
      </Grid>
       ))}
      </Grid>
    </Container>
  )}
