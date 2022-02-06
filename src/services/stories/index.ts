import { AxiosResponse } from 'axios';
import IHome from '../../interfaces/IHome';
import IStory from '../../interfaces/IStory';
import api from '../api';

export const getHome = (
  adultContent: boolean,
): Promise<AxiosResponse<IHome>> => {
  return api.get('/home', {
    params: {
      adultContent,
    },
  });
};

export const getStory = (id: string): Promise<AxiosResponse<IStory>> => {
  return api.get(`/story/${id}`);
};

export const searchStories = (
  param: string,
): Promise<AxiosResponse<IStory[]>> => {
  return api.get(`/search/${param}`);
};
