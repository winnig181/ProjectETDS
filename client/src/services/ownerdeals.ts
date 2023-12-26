import axios from 'axios';
import type { DealType } from '../types/deal/deal';

export const apiOwnerDealsService = axios.create({
  // baseURL: 'http://localhost:3000/api/v1/deals',
  baseURL: `${import.meta.env.VITE_SERVER_BASEURL}ownerdeals`,
});

class OwnerDealsService {
  static async getOwnerDeals(): Promise<DealType[]> {
    const response = await apiOwnerDealsService.get<DealType[]>('/');
    if (response.status === 200) return response.data;
    return [];
  }

  static async ownerApproveDeal(id: DealType['id']): Promise<DealType['id']> {
    try {
      const response = await apiOwnerDealsService.put(`/owner-approve/${id}`);
      // eslint-disable-next-line no-useless-return
      // console.log('response  owner-approve >>>>>>>>>>', response);
      if (response.status === 200) return id;
    } catch (error) {
      throw new Error('Server error sending Owner-approve');
    }
  }
}


export default OwnerDealsService;
