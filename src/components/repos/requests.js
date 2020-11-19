import { api } from 'api/api';

export const getUser = (username) => api.get(`users/${username}`);

export const getRepos = (username) => api.get(`users/${username}/repos?sort=updated&type=all`);