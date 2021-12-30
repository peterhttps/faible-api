import React from 'react';
import { StatusBar } from 'expo-status-bar';
import Navigation from './src/Navigation/Navigation';

export default function App() {
  return (
    <>
      <Navigation />
      <StatusBar style="auto" translucent={false} />
    </>
  );
}
