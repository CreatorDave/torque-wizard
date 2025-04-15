import axios from 'axios';
import { Category } from '../types/torque';

const API_BASE_URL = 'http://localhost:3001/api';

export const api = {
  async getCategories(): Promise<Category[]> {
    const response = await axios.get(`${API_BASE_URL}/categories`);
    return response.data;
  },

  async getCategoryById(id: string): Promise<Category> {
    const response = await axios.get(`${API_BASE_URL}/categories/${id}`);
    return response.data;
  }
}; 