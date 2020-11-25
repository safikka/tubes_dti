import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import Logo from '../../assets/icons/Logo.svg';
import Circle from '../../assets/icons/circle.svg';
import Circle2 from '../../assets/icons/circle2.svg';
import Button from '../../components/Button';

export default function LoginScreen({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.logowrapper}>
        <Circle style={styles.circle} />
        <Circle2 style={styles.circle2} />
        <Animatable.View animation="bounceIn" duration={1500}>
          <Logo height={120} />
          <Text style={styles.logotext}>mbayar.</Text>
        </Animatable.View>
      </View>
      <Animatable.View style={styles.footer} animation="fadeInUp" duration={1000}>
        <Text style={styles.logintext}>Punten, login dulu kak</Text>
        <View style={styles.wrapperinput}>
          <Text style={styles.inputatas}>Email</Text>
          <TextInput placeholder="Masukkan email" style={styles.input} />
          <Text style={styles.inputatas}>Sandi</Text>
          <TextInput placeholder="Masukkan sandi" style={styles.input} />
        </View>
        <Button text="Login" type="filled" onPress={() => navigation.navigate('HomeScreen')} />
        <View style={styles.buttonregist}>
          <Text style={styles.textregist}>Belum punya akun kak? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('RegistScreen')}>
            <Text style={styles.buttontextRegist}>Sini daftar</Text>
          </TouchableOpacity>
        </View>
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
  circle2: {
    position: 'absolute',
    right: 0,
    top: 150,
  },
  logowrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  logotext: {
    fontSize: 30,
    color: 'white',
    fontFamily: 'Poppins-SemiBold',
    paddingBottom: 20,
    textAlign: 'center',
  },
  footer: {
    flex: 1,
    backgroundColor: 'white',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingVertical: 70,
    paddingHorizontal: 25,
  },
  logintext: {
    position: 'absolute',
    top: 40,
    left: 25,
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
  },
  wrapperinput: {
    paddingBottom: 25,
  },
  input: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#C4c4c4',
    paddingHorizontal: 15,
    fontFamily: 'Poppins-Regular',
  },
  inputatas: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#c4c4c4',
    paddingTop: 10,
  },
  buttonregist: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttontextRegist: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 13,
  },
  textregist: {
    fontFamily: 'Poppins-Regular',
    fontSize: 13,
  },
});
