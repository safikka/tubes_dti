import React from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import Logo from '../../assets/icons/Logo.svg';
import Circle from '../../assets/icons/circle.svg';
import Circle2 from '../../assets/icons/circle2.svg';

export default function LandingPage() {
  return (
    <View style={styles.container}>
      <View style={styles.logowrapper}>
        <Circle style={styles.circle} />
        <Circle2 style={styles.circle2} />
        <Logo />
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
    fontFamily: 'Poppins-SemiBold',
  },
  circle: {
    position: 'absolute',
    left: 0,
    top: 0,
  },
  circle2: {
    position: 'absolute',
    right: 0,
    bottom: -120,
  },
});
