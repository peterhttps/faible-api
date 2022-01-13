import { SettingsStore } from '.';

export const setAdultContentSettings = (adultContent: boolean) =>
  SettingsStore.update(s => {
    s.adultContent = adultContent;
  });
