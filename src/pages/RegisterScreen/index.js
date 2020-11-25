import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {TextInput} from 'react-native-gesture-handler';
import Circle from '../../assets/icons/circle.svg';
import Button from '../../components/Button';

export default function RegistScreen({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.wrappercircle}>
        <Circle style={styles.circle} />
      </View>
      <View style={styles.form}>
        <Text style={styles.registtext}>Monggo,</Text>
        <Text style={styles.registtext1}>diisi dulu ya kak</Text>
        <View style={styles.wrapperInput}>
          <Text style={styles.inputatas}>Email</Text>
          <TextInput placeholder="Masukkan email" style={styles.input} />
          <Text style={styles.inputatas}>Sandi</Text>
          <TextInput placeholder="Masukkan sandi" style={styles.input} />
          <Text style={styles.inputatas}>Nama</Text>
          <TextInput placeholder="Masukkan nama" style={styles.input} />
          <Text style={styles.inputatas}>No. Handphone</Text>
          <TextInput placeholder="Masukkan nomer" style={styles.input} />
        </View>
        <Button text="Daftar" type="filled" onPress={() => alert('daftar')} />
        <Button
          text="Kembali"
          type="outlined"
          bordernya="outlined"
          onPress={() => navigation.goBack()}
        />
      </View>
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
  wrapperInput: {
    paddingBottom: 25,
  },
  inputatas: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#c4c4c4',
    paddingTop: 10,
  },
  input: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#C4c4c4',
    paddingHorizontal: 15,
    fontFamily: 'Poppins-Regular',
  },
});
