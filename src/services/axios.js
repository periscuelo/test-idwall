import axios from 'axios';

const myAxios = axios.create({
  baseURL: 'https://api-iddog.idwall.co',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

const token = sessionStorage.getItem('token');

if (token !== null) {
  myAxios.interceptors.request.use(config => {
    config.headers.Authorization = token;
    return config;
  });
}

export default myAxios;
