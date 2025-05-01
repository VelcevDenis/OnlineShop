// src/services/userService.js
import api from './api';

export const fetchUserProfile = () => {
  return api.get('/auth/me');
};

export const updateUserProfile = (profileData) => {
  return api.put('/auth/update', profileData);
};

export const changePassword = (currentPassword, newPassword) => {
    return api.post('/auth/change-password', {
      old_password: currentPassword,
      new_password: newPassword,
    });
  };