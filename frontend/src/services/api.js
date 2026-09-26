import axios from 'axios';

// Create an Axios instance with the base URL from our .env file
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
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