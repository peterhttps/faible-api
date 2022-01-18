import { HomeStore } from '.';
import IHome from '../../interfaces/IHome';

export const setHomeStore = (value: IHome) =>
  HomeStore.update(s => {
    s.home = value;
  });
