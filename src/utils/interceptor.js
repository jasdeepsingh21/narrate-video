import axios from 'axios';
import { USER } from '../store/types';
import { getLocalStorage, clearLocalStorage } from './factory';

export default {
  setupInterceptors: (store, history) => {
    axios.interceptors.request.use(
      (config) => {
        const getTokenValue = getLocalStorage('x-auth-token');
        config.headers.Authorization = `Bearer ${getTokenValue}`;
        return config;
      },
      (error) => {
        Promise.reject(error);
      },
    );
    // Add a response interceptor
    axios.interceptors.response.use(
      (response) => {
        return Promise.resolve(response.data && response.data.data);
      },
      (error) => {
        console.log(
          'Error aat interceptor :',
          error.response.status,
          'message :',
          error.response,
        );
        if (
          error.response &&
          error.response.status === 401 &&
          error.response.statusText === 'Unauthorized'
        ) {
          store.dispatch({ type: USER.LOGOUT });
          clearLocalStorage();
          history.push('/');
        }
        return Promise.reject(error);
      },
    );
  },
};
