import React from 'react';

import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import HomeScreen from './screens/Home';
import RacesScreen from './screens/Races';

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Races: {
      screen: RacesScreen,
    },
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptons: {
      headerStyle: {
        backgroundColor: '#333'
      }
    }
  }
);

export default createAppContainer(AppNavigator);