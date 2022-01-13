import { Store } from 'pullstate';

export const SettingsStore = new Store<{ adultContent: boolean }>({
  adultContent: false,
});
