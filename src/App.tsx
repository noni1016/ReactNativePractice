import React from 'react';
import { Text, StatusBar } from 'react-native';
import Navigator from './Screens/Navigator';

const App = () => {
  return (
    <>
      <StatusBar barStyle="default" />
      <Navigator />
    </>
  );
};

export default App;
