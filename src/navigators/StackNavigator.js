import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from '../views/sample/SplashScreen';
import SignInScreen from '../views/sample/SignInScreen';
import SignUpScreen from '../views/sample/SignUpScreen';
import HomeScreen from '../views/HomeScreen';
import ProfileScreen from '../views/ProfileScreen';
import {
  ConsumerDrawerNavigator,
  GrowerDrawerNavigator,
} from './DrawerNavigator';

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator headerMode={'none'}>
      <Stack.Screen name={'SplashScreen'} component={SplashScreen} />
      <Stack.Screen name={'SignInScreen'} component={SignInScreen} />
      <Stack.Screen name={'SignUpScreen'} component={SignUpScreen} />
      <Stack.Screen name={'CommonHome'} component={HomeScreen} />
      <Stack.Screen name={'ConsumerHome'} component={ConsumerDrawerNavigator} />
      <Stack.Screen name={'GrowerHome'} component={GrowerDrawerNavigator} />
      
      <Stack.Screen name={'ProfileScreen'} component={ProfileScreen} />
    </Stack.Navigator>
  );
};

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: '#9AC4F8',
  },
  headerTintColor: 'white',
  headerBackTitle: 'Back',
};

export {MainStackNavigator};
