import {ScrollView} from 'react-native';
import About from '../components/About';
import React from 'react';
import Edit from '../components/Edit';
import {Provider} from 'react-native-paper';

export const OverviewTab = () => (
  <Provider>
    <ScrollView
      style={{
        display: 'flex',
        flexDirection: 'column',
        paddingHorizontal: 16,
        height: '100%',
      }}>
      <About />
    </ScrollView>
    <Edit />
  </Provider>
);
