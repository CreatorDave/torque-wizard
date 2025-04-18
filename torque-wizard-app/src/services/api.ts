import axios from 'axios';
import { Category, TorqueSpec } from '../types/torque';

const API_BASE_URL = process.env.REACT_APP_API_URL || 
  (process.env.NODE_ENV === 'production'
    ? 'https://torque-wizard-api.onrender.com/api'
    : 'http://localhost:3001/api');

export const api = {
  async getCategories(): Promise<Category[]> {
    try {
      const response = await axios.get(`${API_BASE_URL}/categories`);
      return response.data || [];
    } catch (error) {
      console.error('Error fetching categories:', error);
      return [];
    }
  },

  async getCategoryById(id: string): Promise<Category | null> {
    try {
      const response = await axios.get(`${API_BASE_URL}/categories/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching category:', error);
      return null;
    }
  },
  
  async getTorqueSpecs(categoryId?: string, subcategoryId?: string): Promise<TorqueSpec[]> {
    try {
      let url = `${API_BASE_URL}/categories`;
      if (categoryId) {
        url += `/${categoryId}`;
        if (subcategoryId) {
          url += `/subcategories/${subcategoryId}`;
        }
      }
      const response = await axios.get(url);
      return response.data || [];
    } catch (error) {
      console.error('Error fetching torque specs:', error);
      return [];
    }
  },
  
  async searchTorqueSpecs(query: string): Promise<TorqueSpec[]> {
    try {
      const response = await axios.get(`${API_BASE_URL}/search?q=${encodeURIComponent(query)}`);
      return response.data || [];
    } catch (error) {
      console.error('Error searching torque specs:', error);
      return [];
    }
  }
}; 