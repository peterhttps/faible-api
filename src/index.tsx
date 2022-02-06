import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';
import Navigation from './navigation/Navigation';
import light from './styles/themes/light';
import { getStoriesStorage, setStories } from './store/stories/actions';
import { getSettings, setAdultContentSettings } from './store/settings/actions';

const App: React.FC = () => {
  useEffect(() => {
    const fetchAsyncStorage = async () => {
      const storiesData = await getStoriesStorage();
      const settingsData = await getSettings();
      setStories(storiesData);
      setAdultContentSettings(settingsData.adultContent);
    };
    fetchAsyncStorage();
  }, []);

  return (
    <ThemeProvider theme={light}>
      <Navigation />
      <StatusBar style="auto" translucent={false} backgroundColor="#f2f2f2" />
    </ThemeProvider>
  );
};

export default App;
