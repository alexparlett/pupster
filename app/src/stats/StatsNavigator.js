import type {Node} from 'react';
import React from 'react';
import NavigationHeader from '../shared/NavigationHeader';
import StatsPage from './StatsPage';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const StatsNavigator: () => Node = () => {
  return (
    <Stack.Navigator
      initialRouteName="StatsPage"
      screenOptions={{
        header: props => <NavigationHeader {...props} />,
      }}>
      <Stack.Screen
        name="StatsPage"
        component={StatsPage}
        options={{title: 'Stats'}}
      />
    </Stack.Navigator>
  );
};

export default StatsNavigator;
