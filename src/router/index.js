import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../pages/LoginScreen'
import RegistScreen from '../pages/RegisterScreen';

const StackLogin = createStackNavigator();

const StackLoginScreen = ({navigation}) => (
    <StackLogin.Navigator headerMode='none'>
        <StackLogin.Screen name='LoginScreen' component={LoginScreen}/>
        <StackLogin.Screen name='RegistScreen' component={RegistScreen}/>
    </StackLogin.Navigator>
);

export default StackLoginScreen