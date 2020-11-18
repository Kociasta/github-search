import axios from 'axios';

const api = axios.create({
  baseURL: "https://api.github.com",
  // paramsSerializer: (params) => {
  //   return qs.stringify(params, {arrayFormat: 'repeat'});
  // }
});

export default api;