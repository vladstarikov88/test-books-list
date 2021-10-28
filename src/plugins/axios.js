import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://fakerestapi.azurewebsites.net/api/v1/',
});

instance.interceptors.response.use(response => response, (error) => {
  return Promise.reject(error);
});

export default instance;
