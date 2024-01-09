import apiClient from './apiClient';

export const searchArticles = (query, filter = '') => {
  return apiClient.get('/search/v2/articlesearch.json', {
    params: {
      q: query,
      fq: filter,
    },
  });
};
