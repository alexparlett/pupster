/**
 * Sample React Native HomePage
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import type {Node} from 'react';
import React from 'react';
import {
  DarkTheme,
  DefaultTheme,
  Provider as PaperProvider,
} from 'react-native-paper';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import YourPupNavigator from './yourPup/YourPupNavigator';
import {NavigationContainer} from '@react-navigation/native';
import SettingsNavigator from './settings/SettingsNavigator';
import useDarkMode from './shared/hooks/useDarkMode';
import TrainingNavigator from './training/TrainingNavigator';
import StatsNavigator from './stats/StatsNavigator';
import ActivitiesNavigator from './activities/ActivitiesNavigator';

const Tab = createMaterialBottomTabNavigator();

const App: () => Node = () => {
  const theme = useDarkMode() ? DarkTheme : DefaultTheme;

  return (
    <PaperProvider theme={theme}>
      <NavigationContainer
        theme={{
          ...theme,
        }}>
        <Tab.Navigator
          initialRouteName="YourPup"
          labeled={true}
          shifting={false}>
          <Tab.Screen
            name="YourPup"
            component={YourPupNavigator}
            options={{title: 'Your pup', tabBarIcon: 'dog'}}
          />
          <Tab.Screen
            name="Activities"
            component={ActivitiesNavigator}
            options={{title: 'Activities', tabBarIcon: 'slide'}}
          />
          <Tab.Screen
            name="Stats"
            component={StatsNavigator}
            options={{title: 'Stats', tabBarIcon: 'chart-bar'}}
          />
          <Tab.Screen
            name="Training"
            component={TrainingNavigator}
            options={{title: 'Training', tabBarIcon: 'school'}}
          />
          <Tab.Screen
            name="Settings"
            component={SettingsNavigator}
            options={{title: 'Settings', tabBarIcon: 'cog'}}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
