/**
 * Sample React Native Home
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import type {Node} from 'react';
import React from 'react';
import {useWindowDimensions, View} from 'react-native';
import Profile from './components/Header';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import {overlay, withTheme} from 'react-native-paper';
import {OverviewTab} from './tabs/Overview';

const renderScene = SceneMap({
  overview: OverviewTab,
});

const ProfilePage: () => Node = ({theme}) => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([{key: 'overview', title: 'Overview'}]);

  const {colors} = theme;

  const backgroundColor = theme.dark
    ? overlay(4, colors.surface)
    : colors.primary;

  return (
    <View style={{flex: 1}}>
      <Profile />
      <TabView
        renderTabBar={props => (
          <TabBar
            style={{backgroundColor}}
            renderIndicator={() => null}
            {...props}
          />
        )}
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{width: layout.width}}
      />
    </View>
  );
};

export default withTheme(ProfilePage);
