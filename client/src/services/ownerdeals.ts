import axios from 'axios';
import type {DealType } from '../types/deal/deal';

export const apiOwnerDealsService = axios.create({
  // baseURL: 'http://localhost:3000/api/v1/deals',
  baseURL:  `${import.meta.env.VITE_SERVER_BASEURL}ownerdeals`,
});

class OwnerDealsService {
  static async getOwnerDeals(): Promise<DealType[]> {
    const response = await apiOwnerDealsService.get<DealType[]>('/');
    if (response.status === 200) return response.data;
    return [];
  }

}

export default OwnerDealsService;
