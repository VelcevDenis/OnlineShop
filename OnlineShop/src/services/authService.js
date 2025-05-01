// src/services/authService.js
import api from './api';

export const login = async (credentials) => {
    const formData = new URLSearchParams();
    formData.append('username', credentials.username);
    formData.append('password', credentials.password);
  
    const response = await api.post('/auth/login', formData, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded', // очень важно
      },
    });
  
    return response.data; // { access_token: "...", token_type: "bearer" }
  };
  
  export const register = (userData) => {
    return api.post('/auth/register', userData);
  };
  
  export const logout = () => {
    localStorage.removeItem('token'); // или sessionStorage, если ты используешь его
    window.location.href = '/login'; // Редирект
  };