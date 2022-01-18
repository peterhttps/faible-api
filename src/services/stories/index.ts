import { AxiosResponse } from 'axios';
import IHome from '../../interfaces/IHome';
import IStory from '../../interfaces/IStory';
import api from '../api';

export const getHome = (): Promise<AxiosResponse<IHome>> => {
  return api.get('/home');
};

export const getStory = (id: string): Promise<AxiosResponse<IStory>> => {
  return api.get(`/story/${id}`);
};
