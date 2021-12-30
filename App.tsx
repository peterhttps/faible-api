import React from 'react';
import { StatusBar } from 'expo-status-bar';
import Navigation from './src/navigation/Navigation';
import { ThemeProvider } from 'styled-components/native';

import Application from './src/index';
 

export default function App() {
  return (
    <>
      <Application />
    </>
  );
}
