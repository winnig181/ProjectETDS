import axios from 'axios';
// import type { ItemType, AddItemFormData } from '../types/item/item';
import type { PostType, AddPostFormData } from '../types/post/post';

export const apiPostsService = axios.create({
  baseURL:  `${import.meta.env.VITE_SERVER_BASEURL}posts`,
})

class PostsService {
  static async getPosts(): Promise<PostType[]> {
    const response = await apiPostsService.get<PostType[]>(`/`);
    if (response.status === 200) return response.data;
    return [];
  }

  static async addPost(postFormData: AddPostFormData): Promise<PostType> {
    const response = await apiPostsService.post<PostType>('/', postFormData);
    if (response.status === 201) return response.data;
    return Promise.reject(new Error('Server error adding Post'));
  }

  static async deletePost(id: PostType['id']): Promise<PostType['id']> {
    const response = await apiPostsService.delete<PostType>(`/${id}`);
    if (response.status === 200) return id;
    return Promise.reject(new Error('Server error deleting Post'));
  }
}

export default PostsService;
