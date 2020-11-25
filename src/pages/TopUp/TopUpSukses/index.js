import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Logo from '../../../assets/icons/Logo.svg';
import Circle from '../../../assets/icons/circle.svg';
import Circle2 from '../../../assets/icons/circle2.svg';

export default function TopUpNotif() {
  return (
    <View style={styles.container}>
      <View style={styles.logowrapper}>
        <Circle style={styles.circle} />
        <Circle2 style={styles.circle2} />
        <Logo />
        <Text style={styles.logotext}>Top Up Sukses!</Text>
        <Text style={styles.logotext2}>Rp. 80.000</Text>
        <View style={{paddingTop: 20}}>
          <View style={styles.notif}>
            <Text style={styles.logotext3}>20 Agustus 2020</Text>
            <Text style={styles.logotext3}>Via Bank Mandiri</Text>
          </View>
        </View>
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
    fontSize: 20,
    color: 'white',
    fontFamily: 'Poppins-SemiBold',
  },
  logotext2: {
    fontSize: 35,
    color: 'white',
    fontFamily: 'Poppins-Regular',
  },
  logotext3: {
    fontSize: 14,
    color: '#25282b',
    fontFamily: 'Poppins-Regular',
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
  notif: {
    borderRadius: 10,
    backgroundColor: 'white',
    paddingVertical: 20,
    paddingHorizontal: 50,
  },
});
