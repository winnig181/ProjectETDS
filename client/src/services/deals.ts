import axios from 'axios';
import type { AddDealFormData, DealType } from '../types/deal/deal';

export const apiDealsService = axios.create({
  // baseURL: 'http://localhost:3000/api/v1/deals',
  baseURL:  `${import.meta.env.VITE_SERVER_BASEURL}deals`,
});

class DealsService {
  static async getDeals(): Promise<DealType[]> {
    const response = await apiDealsService.get<DealType[]>('/');
    if (response.status === 200) return response.data;
    return [];
  }

  static async addDeal(dealFormData: AddDealFormData): Promise<DealType> {
    const response = await apiDealsService.post<DealType>('/', dealFormData);
    if (response.status === 201) return response.data;
    return Promise.reject(new Error('Server error adding Item'));
  }

  static async deleteDeal(id: DealType['id']): Promise<DealType['id']> {
    const response = await apiDealsService.delete<DealType>(`/${id}`);
    if (response.status === 200) return id;
    return Promise.reject(new Error('Server error deleting Item'));
  }

  static async editDeal(id: DealType['id'], dealFormData: AddDealFormData): Promise<DealType> {
    try {
      const response = await apiDealsService.put<DealType>(`/${id}`, dealFormData);
      if (response.status === 200) {
        return response.data;
      }
      throw new Error('Failed to update Item');
    } catch (error) {
      throw new Error('Server error editing Item');
    }
  }
}

export default DealsService;
