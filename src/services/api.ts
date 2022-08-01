import axios from 'axios';
import Config from 'react-native-config';

export const Api = axios.create({
  baseURL: Config.API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  params: {
    api_key: Config.API_KEY,
    language: 'en-US',
  },
});
