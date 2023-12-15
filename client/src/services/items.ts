import axios from 'axios';
import type { ItemType, AddItemFormData } from '../types/item/item';

export const apiItemsService = axios.create({
  // baseURL: 'http://localhost:3000/api/v1/products',
  baseURL:  `${import.meta.env.VITE_SERVER_BASEURL}products`,
});

class ItemsService {
  static async getItems(): Promise<ItemType[]> {
    const response = await apiItemsService.get<ItemType[]>('/');
    if (response.status === 200) return response.data;
    return [];
  }

  static async addItem(itemFormData: AddItemFormData): Promise<ItemType> {
    const response = await apiItemsService.post<ItemType>('/', itemFormData);
    if (response.status === 201) return response.data;
    return Promise.reject(new Error('Server error adding Item'));
  }

  static async deleteItem(id: ItemType['id']): Promise<ItemType['id']> {
    const response = await apiItemsService.delete<ItemType>(`/${id}`);
    if (response.status === 200) return id;
    return Promise.reject(new Error('Server error deleting Item'));
  }

  static async editItem(id: ItemType['id'], itemFormData: AddItemFormData): Promise<ItemType> {
    try {
      const response = await apiItemsService.put<ItemType>(`/${id}`, itemFormData);
      if (response.status === 200) {
        return response.data;
      }
      throw new Error('Failed to update Item');
    } catch (error) {
      throw new Error('Server error editing Item');
    }
  }

  static async editIsFavItem(id: ItemType['id']): Promise<ItemType['id']> {
    try {
      const response = await apiItemsService.put(`/isFav/${id}`);
      // eslint-disable-next-line no-useless-return
      console.log('response  IsFav >>>>>>>>>>', response);
      if (response.status === 200) return id;
    } catch (error) {
      throw new Error('Server error editing isFav Item status');
    }
  }
}

export default ItemsService;
