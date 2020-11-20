import axios from 'axios';

export const api = axios.create({
  baseURL: "https://api.github.com"
});

const isLocalhost = window.location.hostname === 'localhost';
export const pathName = isLocalhost ? '' : '/github-search';
