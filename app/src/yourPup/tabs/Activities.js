import {ScrollView} from 'react-native';
import {List} from 'react-native-paper';
import React from 'react';

export const ActivitiesTab = () => (
  <ScrollView
    style={{
      display: 'flex',
      flexDirection: 'column',
      paddingHorizontal: 16,
      height: '100%',
    }}>
    <List.Item
      title="First Item"
      description="Item description"
      left={props => <List.Icon {...props} icon="folder" />}
    />
  </ScrollView>
);
