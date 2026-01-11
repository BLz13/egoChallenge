import { API_BASE_URL } from '../config/api';

export const getModelSpecs = async (model) => {

  try {
    const response = await fetch(`${API_BASE_URL}/models/${model}`);
    
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