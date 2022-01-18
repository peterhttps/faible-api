import { HomeStore } from '../../store/home';

const useHome = () => HomeStore.useState(s => s);

export { useHome };
