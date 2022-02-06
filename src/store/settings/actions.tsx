import AsyncStorage from '@react-native-async-storage/async-storage';
import { SettingsStore } from '.';

export const setAdultContentSettings = (adultContent: boolean) =>
  SettingsStore.update(s => {
    s.adultContent = adultContent;
  });

export const setSettings = async (settings: unknown) => {
  try {
    await AsyncStorage.setItem('@settings', JSON.stringify(settings));
  } catch (e) {
    // Saving error
  }
};

export const getSettings = async () => {
  try {
    const actualStorage = await AsyncStorage.getItem('@settings');
    const settings = JSON.parse(actualStorage || '[]');
    return settings;
  } catch (e) {
    return [];
  }
};
