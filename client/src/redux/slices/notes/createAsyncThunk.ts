// /* eslint-disable import/prefer-default-export */
// import { createAsyncThunk } from '@reduxjs/toolkit';
// import type { NoteType, AddNoteFormData } from '../../../types/note/note';
// import NotesService from '../../../services/notes';

// export const thunkNotesLoad = createAsyncThunk('notesSlice/thunkNotesLoad', async () =>
//   NotesService.getNotes(),
// );

// export const thunkNotesAdd = createAsyncThunk(
//   'notesSlice/thunkNotesAdd',
//   async (formData: AddNoteFormData) => NotesService.addNote(formData),
// );

// export const thunkNotesDelete = createAsyncThunk(
//   'notesSlice/thunkNotesDelete',
//   async (id: NoteType['id']) => NotesService.deleteNote(id),
// );

// export const thunkNotesEdit = createAsyncThunk(
//   'notesSlice/thunkNotesEdit',
//   async ({ id, formData }: { id: NoteType['id']; formData: AddNoteFormData }) =>
//     NotesService.editNote(id, formData),
// );

// export const thunkNotesEditIsFav = createAsyncThunk(
//   'notesSlice/thunkNotesEditIsFav',
//   async (id: NoteType['id']) =>
//     NotesService.editIsFavNote(id),
// );
