import axios from 'axios';

const client = axios.create({
  baseURL: 'http://3.39.172.245:8080/api',
  withCredentials: true,
});

export default client;
