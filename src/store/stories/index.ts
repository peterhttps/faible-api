import { Store } from 'pullstate';
import IStory from '../../interfaces/IStory';

export const StoriesStore = new Store<{ stories: IStory[] }>({
  stories: [],
});
