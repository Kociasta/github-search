import { api } from 'api/api';

export const getRepo = (username, repo) => api.get(`repos/${username}/${repo}/commits`);