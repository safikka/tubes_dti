import React from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import Logo from '../../assets/icons/Logo.svg';

export default function LandingPage() {
  return (
    <View style={styles.container}>
      <View style={styles.logowrapper}>
        <Logo/>
        <Text style={styles.logotext}>mbayar.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F53B50',
  },
  logowrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logotext: {
    fontSize: 35,
    color: 'white',
    fontFamily: 'Poppins-SemiBold'
  },
});
