import axios from "axios";
import applyCaseMiddleware from 'axios-case-converter';
import { apiUrl } from 'utils/constant';

const instance = axios.create({
  baseURL: apiUrl,
});

const api = applyCaseMiddleware(instance);

api.interceptors.request.use(async (config) => {
  // const accessToken = localStorage.getItem('accessToken');
  // if (accessToken) {
  //   // @ts-ignore
  //   config.headers.Authorization = `Bearer ${accessToken}`;
  // }

  return config;
});

api.interceptors.response.use(
  res => {
    // const { data } = res;

    // try {
    //   if ('accessToken' in data) {
    //     localStorage.setItem('accessToken', data.accessToken);
    //   }
  
    //   if ('refreshToken' in data) {
    //     localStorage.setItem('refreshToken', data.refreshToken);
    //   }
    // } catch (err) {
    //   console.log(err);
    // }

    return res;
  },
  err => {
    // global 401 handler
    // const token = localStorage.getItem('accessToken');

    // if (err.response.status === 401 && token) {
    //   localStorage.clear();
    //   window.location.href = '/login';
    //   return;
    // }

    throw err;
  },
);

export default api;
