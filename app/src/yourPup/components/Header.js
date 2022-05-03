/**
 * Sample React Native Home
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import type {Node} from 'react';
import React from 'react';
import {View} from 'react-native';
import {Avatar, overlay, Text, Title, withTheme} from 'react-native-paper';

const Header: () => Node = ({theme}) => {
  const {colors} = theme;

  const backgroundColor = theme.dark
    ? overlay(4, colors.surface)
    : colors.primary;
  const textColor = theme.dark ? colors.text : colors.background;

  return (
    <View
      style={{
        paddingHorizontal: 16,
        paddingVertical: 0,
        backgroundColor: backgroundColor,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Avatar.Image
        size={128}
        source={{
          uri: 'https://www.ctvsh.com/sites/default/files/styles/large/public/golden-retriever-dog-breed-info.jpg?itok=KV7Ojj-C',
        }}
      />
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          paddingVertical: 16,
        }}>
        <Title style={{color: textColor}}>Bertie</Title>
        <Text style={{color: textColor}}>Golden Retriever</Text>
      </View>
    </View>
  );
};

export default withTheme(Header);
