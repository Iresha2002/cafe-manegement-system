import axios from 'axios';

// Dynamically determine the API base URL:
// Uses window.location.hostname so requests automatically route to the hosting PC (e.g. PC 1)
// regardless of whether accessed via localhost, lab LAN IP (e.g. 10.50.80.128), or mobile.
const getBaseUrl = () => {
  if (typeof window !== 'undefined' && window.location.hostname) {
    return `http://${window.location.hostname}:5000/api`;
  }
  return import.meta.env.VITE_API_URL || 'http://localhost:5000/api';
};

const api = axios.create({
  baseURL: getBaseUrl(),
});

// This is an interceptor. It automatically attaches the JWT token 
// to the headers of every request if the user is logged in.
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;