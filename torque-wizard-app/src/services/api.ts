import axios from 'axios';
import { Category } from '../types/torque';

const API_BASE_URL = process.env.NODE_ENV === 'production'
  ? 'https://torque-wizard-api.onrender.com/api'
  : 'http://localhost:3001/api';

export const api = {
  async getCategories(): Promise<Category[]> {
    try {
      const response = await axios.get(`${API_BASE_URL}/categories`);
      return response.data;
    } catch (error) {
      console.error('Error fetching categories:', error);
      throw error;
    }
  },

  async getCategoryById(id: string): Promise<Category> {
    try {
      const response = await axios.get(`${API_BASE_URL}/categories/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching category:', error);
      throw error;
    }
  }
}; 