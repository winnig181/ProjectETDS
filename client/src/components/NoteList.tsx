// import React from 'react';
// import { Grid } from '@mui/material';
// import NoteCard from './NoteCard';
// import { useAppSelector } from '../redux/hook';


// type NoteListProps={
//   isFav?: boolean;
// }

// export default function NoteList({isFav=false}:NoteListProps): JSX.Element {
//   const notes = useAppSelector((state)=>state.notesSlice.notes);
//   console.log('>>>>>>>>',notes);
//   const favNotes = notes.filter((note)=>note.isFav === true );
//   const notesUsed = isFav ? favNotes : notes;
//   return (
//     <Grid container spacing={3}>
//       {notesUsed.map((card) => (
//         <Grid key={card.id} item xs={4}>
//           <NoteCard note={card} />
//         </Grid>
//       ))}
//       {/* <EditNoteFormModal /> */}
//     </Grid>
//   );
// }
