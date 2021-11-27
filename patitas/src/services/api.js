import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:4000/',
});

api.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    console.log('se envio la peticion!!!');
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    console.log('se termino la peticion');
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

export { api };
