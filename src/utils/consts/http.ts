import axios from 'axios';

const http = axios.create({
  baseURL: 'https://randomuser.me/api/',
});

export default http;
