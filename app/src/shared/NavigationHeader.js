import type {Node} from 'react';
import React from 'react';
import {Appbar} from 'react-native-paper';
import {getHeaderTitle} from '@react-navigation/elements';

const NavigationHeader: () => Node = ({navigation, back, options, route}) => {
  const title = getHeaderTitle(options, route.name);
  const actions = options.actions || [];
  return (
    <Appbar.Header>
      {back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
      <Appbar.Content title={title} />
      {actions.map(action => (
        <Appbar.Action icon={action.icon} onPress={action.onPress} />
      ))}
    </Appbar.Header>
  );
};

export default NavigationHeader;
