import { Container } from '@mui/material';
import React from 'react';
import NoteList from '../components/NoteList';


import { useAppSelector } from '../redux/hook';


export default function NotesPage(): JSX.Element {
  const auth = useAppSelector((store) => store.authSlice);
  return (
    <Container sx={{ margin: 'auto' }}>
      {/* <AddNoteForm /> */}

        <NoteList />

    </Container>
  );
}
