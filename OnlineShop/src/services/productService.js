// src/services/productService.js
import api from './api';

export const fetchAllProducts = () => {//not use
  return api.get('/products');
};

export const fetchProductById = (id) => {//not use
  return api.get(`/products/${id}`);
};

export const createProduct = (productData) => {//not use
  return api.post('/products', productData);
};

export const updateProduct = (id, productData) => {//not use
  return api.put(`/products/${id}`, productData);
};

export const deleteProduct = (id) => {//not use
  return api.delete(`/products/${id}`);
};
