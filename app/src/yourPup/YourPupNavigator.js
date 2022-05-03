import type {Node} from 'react';
import React from 'react';
import NavigationHeader from '../shared/NavigationHeader';
import ProfilePage from './ProfilePage';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {IconButton} from 'react-native-paper';

const Stack = createNativeStackNavigator();

const YourPupNavigator: () => Node = () => {
  return (
    <Stack.Navigator
      initialRouteName="ProfilePage"
      screenOptions={{
        header: props => <NavigationHeader {...props} />,
      }}>
      <Stack.Screen
        name="ProfilePage"
        component={ProfilePage}
        options={() => ({
          title: null,
        })}
      />
    </Stack.Navigator>
  );
};

export default YourPupNavigator;
