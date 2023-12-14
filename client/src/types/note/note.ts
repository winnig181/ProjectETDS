export type NoteType = {
  id: number;
  title: string;
  text: string;
  img: string;
  isFav: boolean;
  createdAt: Date;
  updatedAt: Date;
};

export type AddNoteFormData = {
  title: string;
  text: string;
  img: string;
  isFav: boolean;
};

export type NotesState = {
  notes: NoteType[];
};

// export type NotesActions =
//   | { type: 'SET_NOTES'; payload: NoteType[] }
//   | { type: 'ADD_NOTE'; payload: NoteType }
//   | { type: 'EDIT_NOTE'; payload: NoteType }
//   | { type: 'DELETE_NOTE'; payload: NoteType['id'] }
//   | { type: 'ISFAV_EDIT_NOTE'; payload: NoteType['id'] }
//   | { type: 'BAAAAAA' };

// export type NoteSliceState = NoteType[];

export type NoteSliceState = {
  notes: NoteType[];
  currentNote: NoteType | null;
};
