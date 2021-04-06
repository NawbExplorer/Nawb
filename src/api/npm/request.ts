import axios from 'axios';

export const npm = axios.create({
  baseURL: ' https://registry.npmjs.org',
  timeout: 8000,
});

// npm.interceptors.request.use(
//   (config) => {
//     return config;
//   },
//   function (err) {
//     return Promise.reject(err);
//   },
// );

// npm.interceptors.response.use(
//   function (response) {
//     return response;
//   },
//   function (error) {
//     return Promise.reject(error);
//   },
// );
