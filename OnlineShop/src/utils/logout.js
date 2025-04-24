// src/utils/logout.js
export const logout = () => {
    localStorage.removeItem('token'); // или sessionStorage, если ты используешь его
    window.location.href = '/login'; // Редирект
  };