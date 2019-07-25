import Axios from '@/services/axios';

export default {
  login(email) {
    const login = Axios.post('/signup', { email });
    login.then(resp => {
      if (resp.data.user.token !== null) {
        sessionStorage.setItem('token', resp.data.user.token);
        Axios.interceptors.request.use(config => {
          config.headers.Authorization = resp.data.user.token;
          return config;
        });
      }
    });
    return login;
  },
};
