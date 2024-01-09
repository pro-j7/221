import apiClient from './apiClient';

export const getMostEmailedArticles = (period) => {
  return apiClient.get(`/mostpopular/v2/emailed/${period}.json`);
};

export const getMostSharedArticles = (period, shareType = 'facebook') => {
  return apiClient.get(`/mostpopular/v2/shared/${period}/${shareType}.json`);
};

export const getMostViewedArticles = (period) => {
  return apiClient.get(`/mostpopular/v2/viewed/${period}.json`);
};
