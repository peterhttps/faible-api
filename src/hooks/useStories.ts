import { StoriesStore } from '../store/stories';

const useStories = () => StoriesStore.useState(s => s);

export { useStories };
