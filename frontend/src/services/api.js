import axios from 'axios';

// Use proxy in development, or full URL if VITE_API_URL is set
const API_BASE_URL = import.meta.env.VITE_API_URL || '';

export const fetchStudyData = async (topic, mode = 'default') => {
  try {
    const url = API_BASE_URL ? `${API_BASE_URL}/study` : '/study';
    const response = await axios.get(url, {
      params: {
        topic,
        mode
      },
      timeout: 30000 // 30 seconds timeout
    });

    if (response.data.success) {
      return response.data.data;
    } else {
      throw new Error(response.data.error || 'Failed to fetch study data');
    }
  } catch (error) {
    if (error.code === 'ECONNABORTED') {
      throw new Error('Request timed out. Please try again.');
    }
    if (error.response) {
      throw new Error(error.response.data.error || 'Server error occurred');
    }
    if (error.request) {
      throw new Error('Unable to connect to server. Please check if the backend is running.');
    }
    throw new Error(error.message || 'An unexpected error occurred');
  }
};
