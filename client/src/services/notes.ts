import axios from 'axios';
import type { NoteType, AddNoteFormData } from '../types/note/note';

export const apiNotesService = axios.create({
  // baseURL: 'http://localhost:3000/api/v1/products',
  baseURL:  `${import.meta.env.VITE_SERVER_BASEURL}products`,
});

class NotesService {
  static async getNotes(): Promise<NoteType[]> {
    const response = await apiNotesService.get<NoteType[]>('/');
    if (response.status === 200) return response.data;
    return [];
  }

  static async addNote(noteFormData: AddNoteFormData): Promise<NoteType> {
    const response = await apiNotesService.post<NoteType>('/', noteFormData);
    if (response.status === 201) return response.data;
    return Promise.reject(new Error('Server error adding note'));
  }

  static async deleteNote(id: NoteType['id']): Promise<NoteType['id']> {
    const response = await apiNotesService.delete<NoteType>(`/${id}`);
    if (response.status === 200) return id;
    return Promise.reject(new Error('Server error deleting note'));
  }

  static async editNote(id: NoteType['id'], noteFormData: AddNoteFormData): Promise<NoteType> {
    try {
      const response = await apiNotesService.put<NoteType>(`/${id}`, noteFormData);
      if (response.status === 200) {
        return response.data;
      }
      throw new Error('Failed to update Note');
    } catch (error) {
      throw new Error('Server error editing Note');
    }
  }

  static async editIsFavNote(id: NoteType['id']): Promise<NoteType['id']> {
    try {
      const response = await apiNotesService.put(`/isFav/${id}`);
      // eslint-disable-next-line no-useless-return
      console.log('response  IsFav >>>>>>>>>>', response);
      if (response.status === 200) return id;
    } catch (error) {
      throw new Error('Server error editing isFav note status');
    }
  }
}

export default NotesService;
