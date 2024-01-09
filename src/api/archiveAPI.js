import apiClient from './apiClient';

export const getArchive = (year, month) => {
  return apiClient.get(`/archive/v1/${year}/${month}.json`);
};
