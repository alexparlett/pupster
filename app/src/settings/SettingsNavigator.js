import type {Node} from 'react';
import React from 'react';
import NavigationHeader from '../shared/NavigationHeader';
import SettingsPage from './SettingsPage';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const SettingsNavigator: () => Node = () => {
  return (
    <Stack.Navigator
      initialRouteName="SettingsPage"
      screenOptions={{
        header: props => <NavigationHeader {...props} />,
      }}>
      <Stack.Screen
        name="SettingsPage"
        component={SettingsPage}
        options={{title: 'Settings'}}
      />
    </Stack.Navigator>
  );
};

export default SettingsNavigator;
