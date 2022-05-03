import type {Node} from 'react';
import React from 'react';
import NavigationHeader from '../shared/NavigationHeader';
import TrainingPage from './TrainingPage';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const TrainingNavigator: () => Node = () => {
  return (
    <Stack.Navigator
      initialRouteName="TrainingPage"
      screenOptions={{
        header: props => <NavigationHeader {...props} />,
      }}>
      <Stack.Screen
        name="TrainingPage"
        component={TrainingPage}
        options={{title: 'Training'}}
      />
    </Stack.Navigator>
  );
};

export default TrainingNavigator;
