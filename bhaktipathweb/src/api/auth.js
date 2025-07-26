import axios from './axiosInstance';

export const loginAdmin = async (credentials) =>
  axios.post('/auth/login', credentials);

export const registerAdmin = async (data) =>
  axios.post('/auth/register', data); // ✅ CORRECT
