/* eslint-disable radix */
import React from 'react';
import { Grid, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '../redux/hook';

export default function OneNotePage(): JSX.Element {
  const notes = useAppSelector((state)=>state.notes);

  const params = useParams();

  const noteId = Number(params.noteId);
  const note = notes.find((el) => el.id === noteId);


  return (
    <>
      <h3>OnenotePage</h3>
      <Card variant="outlined" sx={{ maxWidth: 345 }}>
        <CardMedia sx={{ height: 300 }} image={note?.img} title="note" />
        <CardContent>
          <Typography gutterBottom variant="h3" component="div">
            {note?.title}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            {note?.text}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {note?.isFav && 'Favourite'}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}
