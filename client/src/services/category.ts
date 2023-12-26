import axios from 'axios';
import type { CategoryType, AddCategoryFormData } from '../types/category';

export const apiCategoriesService = axios.create({
    // baseURL: 'http://localhost:3000/api/v1/products',
    baseURL:  `${import.meta.env.VITE_SERVER_BASEURL}categories`,
});

class CategoriesService {
    static async getCategories(): Promise<CategoryType[]> {
        const response = await apiCategoriesService.get<CategoryType[]>('/');
        if (response.status === 200) return response.data;
        return [];
    }

    static async addCategory(categoryFormData: AddCategoryFormData): Promise<CategoryType> {
        const response = await apiCategoriesService.post<CategoryType>('/', categoryFormData);
        if (response.status === 201) return response.data;
        return Promise.reject(new Error('Server error adding Categories'));
    }

    static async deleteCategory(id: CategoryType['id']): Promise<CategoryType['id']> {
        const response = await apiCategoriesService.delete<CategoryType>(`/${id}`);
        if (response.status === 200) return id;
        return Promise.reject(new Error('Server error deleting Categories'));
    }

    static async editCategory(id: CategoryType['id'], categoryFormData: AddCategoryFormData): Promise<CategoryType> {
        try {
            const response = await apiCategoriesService.put<CategoryType>(`/${id}`, categoryFormData);
            if (response.status === 200) {
                return response.data;
            }
            throw new Error('Failed to update Categories');
        } catch (error) {
            throw new Error('Server error editing Categories');
        }
    }

}

export default CategoriesService;
