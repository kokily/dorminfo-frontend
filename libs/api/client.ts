import axios from 'axios';

const client = axios.create({
  baseURL: 'https://dorm.dnkdream.com/api',
});

export default client;
