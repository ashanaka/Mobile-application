import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { MainStackNavigator } from './navigators/StackNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <MainStackNavigator/>
    </NavigationContainer>
  );
};

export default App;
