import type {Node} from 'react';
import React from 'react';
import NavigationHeader from '../shared/NavigationHeader';
import ActivitiesPage from './ActivitiesPage';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const ActivitiesNavigator: () => Node = () => {
  return (
    <Stack.Navigator
      initialRouteName="ActivitiesPage"
      screenOptions={{
        header: props => <NavigationHeader {...props} />,
      }}>
      <Stack.Screen
        name="ActivitiesPage"
        component={ActivitiesPage}
        options={{title: 'Activities'}}
      />
    </Stack.Navigator>
  );
};

export default ActivitiesNavigator;
