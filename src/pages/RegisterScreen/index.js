import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import * as Animatable from 'react-native-animatable';
import Circle from '../../assets/icons/circle.svg';
import Button from '../../components/Button';

export default function RegistScreen({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.wrappercircle}>
        <Circle style={styles.circle} />
      </View>
      <Animatable.View style={styles.form} animation="fadeInUp" duraton="5000">
        <Text style={styles.registtext}>Monggo,</Text>
        <Text style={styles.registtext1}>diisi dulu ya kak</Text>
      </Animatable.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F53B50',
  },
  circle: {
    position: 'absolute',
    left: 0,
    top: 0,
  },
  wrappercircle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  form: {
    flex: 8,
    backgroundColor: 'white',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingVertical: 70,
    paddingHorizontal: 25,
  },
  registtext: {
    position: 'absolute',
    top: 40,
    left: 25,
    fontFamily: 'Poppins-SemiBold',
    fontSize: 20,
  },
  registtext1: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 20,
  },
});
