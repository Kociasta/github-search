import { api } from 'api/api';

export const getUser = (username) => api.get(`users/${username}`);