import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import LoginScreen from '../pages/LoginScreen';
import RegistScreen from '../pages/RegisterScreen';
import HomeScreen from '../pages/HomeScreen';
import TransaksiScreen from '../pages/TransaksiScreen';
import ProfileScreen from '../pages/ProfileScreen';
import TopUpScreen from '../pages/TopUp/TopUpScreen';
import TopUpNotif from '../pages/TopUp/TopUpSukses';
import QrScreen from '../pages/QrScreen/QrCamScreen';
import QrKonfirmasi from '../pages/QrScreen/QrKonfirmasi';
import QrNotif from '../pages/QrScreen/QrSukses';
import TransferScreen from '../pages/Transfer/TransferScreen';
import TransferNotif from '../pages/Transfer/TransferSukses';
import TabBarKustom from '../components/CustomTabBar';

const StackLogin = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeRoot = () => {
  return (
    <Tab.Navigator tabBar={(props) => <TabBarKustom {...props} />}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Transaksi" component={TransaksiScreen} />
      <Tab.Screen name="Profil" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

const StackSemua = ({navigation}) => (
  <StackLogin.Navigator
    headerMode="none"
    options={{
      gestureDirection: 'horizontal',
    }}>
    <StackLogin.Screen name="LoginScreen" component={LoginScreen} />
    <StackLogin.Screen name="RegistScreen" component={RegistScreen} />
    <StackLogin.Screen name="HomeScreen" component={HomeRoot} />
    <StackLogin.Screen name="TopUpScreen" component={TopUpScreen} />
    <StackLogin.Screen name="TopUpNotif" component={TopUpNotif} />
    <StackLogin.Screen name="QrScreen" component={QrScreen} />
    <StackLogin.Screen name="QrKonfirmasi" component={QrKonfirmasi} />
    <StackLogin.Screen name="QrNotif" component={QrNotif} />
    <StackLogin.Screen name="TransferScreen" component={TransferScreen} />
    <StackLogin.Screen name="TransferNotif" component={TransferNotif} />
  </StackLogin.Navigator>
);

export default StackSemua;
