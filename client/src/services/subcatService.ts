/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import type { SubcatType} from '../types/subcategory';

export const apiSubcatsService = axios.create({
  // baseURL: 'http://localhost:3000/api/v1/subcats',
  baseURL:  `${import.meta.env.VITE_SERVER_BASEURL}subcats`,
});

class SubcatsService {
  static async getSubcats(subCategoryName:SubcatType['subCategoryName']): Promise<SubcatType[]> {
    try{
      const response = await apiSubcatsService.get<SubcatType[]>(`/${subCategoryName}`);
      if (response.status === 200) return response.data;
      return [];
    } catch (error) {
      console.log(error)
      throw new Error('Server error loading Subcats');
    }
  }
}

export default SubcatsService;
