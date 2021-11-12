import { AxiosRequestConfig } from 'axios';

export const CONFIG_AXIOS: AxiosRequestConfig = {baseURL: 'http://localhost:3000/user/'};

export const getRandomeAge = (min: number, max : number): number => 
  Math.floor(Math.random() * (max - min + 1)) + min;
