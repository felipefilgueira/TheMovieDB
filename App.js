import React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import App from './AppComponent'
import Page2 from './Page2';


export default createStackNavigator({
  HomeScreen: App,
  Page2: Page2
})