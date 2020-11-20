import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import StackLogin from './router';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StackLogin />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
