import apiClient from './apiClient';

export const getTopStories = (section) => {
  return apiClient.get(`/topstories/v2/${section}.json`);
};
