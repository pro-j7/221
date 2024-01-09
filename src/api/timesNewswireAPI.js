import apiClient from './apiClient';

export const getLatestArticles = (source = 'all', section = 'all') => {
  return apiClient.get(`/news/v3/content/${source}/${section}.json`);
};

export const getSectionList = () => {
  return apiClient.get('/news/v3/content/section-list.json');
};
