import { Store } from 'pullstate';
import IHome from '../../interfaces/IHome';

export const HomeStore = new Store<{ home: IHome | null }>({
  home: null,
});
