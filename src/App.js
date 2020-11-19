import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LandingPage from './pages/LandingPage'
import LoginScreen from './pages/LoginScreen'

const Stack = createStackNavigator();

export default function App() {
  return (
    <LoginScreen />
  )
}

const styles = StyleSheet.create({})
