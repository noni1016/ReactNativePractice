import React from 'react';
import { Text, StatusBar } from 'react-native';
import { RandomUserDataProvider } from './Context/RandomUserData';
import Navigator from './Screens/Navigator';

const App = () => {
  return (
    <RandomUserDataProvider cache={true}>
      <StatusBar barStyle="default" />
      <Navigator />
    </RandomUserDataProvider>
  );
};

export default App;
