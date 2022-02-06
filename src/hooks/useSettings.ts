import { SettingsStore } from '../store/settings';

const useSettings = () => SettingsStore.useState(s => s);

export { useSettings };
