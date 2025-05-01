// src/services/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Добавляем токен автоматически перед каждым запросом
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`; // << исправлено
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
