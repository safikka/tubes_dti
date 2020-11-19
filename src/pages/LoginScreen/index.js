import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Logo from '../../assets/icons/Logo.svg';
import Circle from '../../assets/icons/circle.svg';
import Circle2 from '../../assets/icons/circle2.svg';

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.logowrapper}>
        <Circle style={styles.circle} />
        <Circle2 style={styles.circle2} />
        <Logo height={120} />
        <Text style={styles.logotext}>mbayar.</Text>
      </View>
      <View style={styles.footer}>
        <Text style={styles.logintext}>Punten, login dulu kak</Text>
        <View style={styles.wrapperinput}>
          <Text style={styles.inputatas}>Email</Text>
          <TextInput title="Masukkan email" style={styles.input} />
          <Text style={styles.inputatas}>Sandi</Text>
          <TextInput title="Masukkan sandi" style={styles.input} />
        </View>
        <View style={styles.buttonlogin}>
          <TouchableOpacity onPress={() => alert('login')}>
            <Text style={styles.buttontextlogin}>Login</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonregist}>
          <Text style={styles.textregist}>Belum punya akun kak? </Text>
          <TouchableOpacity onPress={() => alert('daftar')}>
            <Text style={styles.buttontextRegist}>Sini daftar</Text>
          </TouchableOpacity>
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
  },
  inputatas: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#c4c4c4',
    paddingTop: 10,
  },
  buttonlogin: {
    borderRadius: 10,
    backgroundColor: '#f53b50',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 17,
  },
  buttontextlogin: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 14,
    color: 'white',
  },
  buttonregist: {
    paddingTop: 20,
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
