import React from 'react'
import {StyleSheet, Image, View} from 'react-native';
import Duar from '../../../assets/icons/transfer/duar.svg';
import Circle from '../../../assets/icons/circle.svg';
import Circle2 from '../../../assets/icons/circle2.svg';

export default function QrScreen() {
    return (
    <View style={styles.container}>
      <View style={styles.logowrapper}>
        <Circle style={styles.circle} />
        <Circle2 style={styles.circle2} />
        <Duar />
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
    fotoprofil: {
        width: 60,
        height: 60,
      },
  });
  
