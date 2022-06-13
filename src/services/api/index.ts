import axios from 'axios';
import { BASE_URL } from '@env';

console.log(BASE_URL);
const api = axios.create({
  baseURL: BASE_URL,
});

export default api;
