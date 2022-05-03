/**
 * Sample React Native Home
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import type {Node} from 'react';
import React from 'react';
import {Caption, Divider, List, Text, Title} from 'react-native-paper';
import {View} from 'react-native';

const About: () => Node = () => {
  return (
    <View style={{paddingVertical: 16, flexDirection: 'column'}}>
      <List.Item
        style={{paddingHorizontal: 0, alignItems: 'center'}}
        left={props => (
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <Caption>Breed</Caption>
          </View>
        )}
        right={props => (
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <Text>Golden Retriever</Text>
          </View>
        )}
      />
      <Divider />
      <List.Item
        style={{paddingHorizontal: 0, alignItems: 'center'}}
        left={props => (
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <Caption>Colour</Caption>
          </View>
        )}
        right={props => (
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <Text>White/Cream</Text>
          </View>
        )}
      />
      <Divider />
      <List.Item
        style={{
          paddingHorizontal: 0,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        left={props => (
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <Caption>Weight</Caption>
          </View>
        )}
        right={props => (
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <Text>20.1 Kg</Text>
          </View>
        )}
      />
      <Divider />
      <List.Item
        style={{paddingHorizontal: 0, alignItems: 'center'}}
        left={props => (
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <Caption>Age</Caption>
          </View>
        )}
        right={props => (
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <Text>4 Months</Text>
          </View>
        )}
      />
      <Divider />
      <List.Item
        style={{paddingHorizontal: 0, alignItems: 'center'}}
        left={props => (
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <Caption>Sex</Caption>
          </View>
        )}
        right={props => (
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <Text>Male</Text>
          </View>
        )}
      />
      <Divider />
      <List.Item
        style={{paddingHorizontal: 0, alignItems: 'center'}}
        left={props => (
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <Caption>Neutered</Caption>
          </View>
        )}
        right={props => (
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <Text>No</Text>
          </View>
        )}
      />
    </View>
  );
};

export default About;
