import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import StackSemua from './router';

export default function App() {
  return (
    <NavigationContainer>
      <StackSemua />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
