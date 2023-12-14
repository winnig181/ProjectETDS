import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link, redirect } from 'react-router-dom';
import { Checkbox, FormControlLabel } from '@mui/material';
import type { NoteType } from '../types/note/note';
import { useAppDispatch } from '../redux/hook';


import { setCurrentNote } from '../redux/slices/notes/notesSlice';
import { thunkNotesDelete, thunkNotesEditIsFav,
 } from '../redux/slices/notes/createAsyncThunk';

type NoteTypeProps = {
  note: NoteType;
};

function NoteCard({ note }: NoteTypeProps): JSX.Element {
  console.log('render card');
  const dispatch= useAppDispatch();


  return (
    <Card variant="outlined" sx={{ maxWidth: 345 }}>
      <CardMedia sx={{ height: 300 }} image={note.img} title="note" />
      <CardContent>
        <Typography gutterBottom variant="h3" component="div">
          {note.title}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          {note.text}
        </Typography>
        <FormControlLabel label="Favorite" 
        control={<Checkbox checked={note?.isFav} />}
        onChange={
        () => void dispatch(thunkNotesEditIsFav(note.id))} 
        color="secondary" /> 
          

      </CardContent>
      <CardActions>
        <Button size="small">
          <Link to={`/${note.id}`}>Details</Link>
        </Button>
        <Button size="small" onClick={() => void dispatch(thunkNotesDelete(note.id))}>
          Удалить
        </Button>
        <Button
          size="small"
          onClick={() => {
            dispatch(setCurrentNote(note));
          }}
        >
          Изменить
        </Button>
      </CardActions>
    </Card>
  );
}

export default React.memo(NoteCard);
