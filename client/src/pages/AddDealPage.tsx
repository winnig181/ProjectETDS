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
    </Container>
  )}
