import React from 'react';
import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';
import Navigation from './navigation/Navigation';
import light from './styles/themes/light';

// import { Container } from './styles';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={light}>
      <Navigation />
      <StatusBar style="auto" translucent={false} />
    </ThemeProvider>
  );
}

export default App;