import { API_BASE_URL } from '../config/api';

export const getModels = async (filters = {}) => {
  try {
    const queryParams = new URLSearchParams();
    
    if (filters.segment) {
      queryParams.append('segment', filters.segment);
    }
    
    if (filters.ordering || filters.sortBy) {
      const sortValue = filters.ordering || filters.sortBy;
      queryParams.append('ordering', sortValue);
    }
    
    const queryString = queryParams.toString();
    const url = queryString ? `${API_BASE_URL}/models?${queryString}` : `${API_BASE_URL}/models`;
    
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching models:', error);
    throw error;
  }
};


