import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Circle from '../../assets/icons/circlehome.svg';
import Button from '../../components/Button';

export default function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.wrapperAtas}>
        <Circle style={styles.circle} />
        <Image
          style={styles.fotoprofil}
          source={{
            uri:
              'https://i.pinimg.com/236x/ce/2a/95/ce2a95e99faceaf7af19c273b10ebcc1.jpg',
          }}
        />
        <View style={styles.wrapperNama}>
          <Text style={styles.text1}>Selamat datang,</Text>
          <Text style={styles.text2}>Kak Squidward!</Text>
        </View>
      </View>
      <View style={styles.kontenAtas}>
        <View style={styles.wrapperKontenAtas}>
          <View style={styles.wrapperSaldo}>
            <Text style={styles.textSaldo1}>Saldo kamu :</Text>
            <Text style={styles.textSaldo2}>Rp. 500.000</Text>
          </View>
          <View style={styles.wrapperMenu}>
            <View style={styles.jarakMenu}>
              <Button
                size="small"
                bordernya="menu"
                logo="topup"
                onPress={() => navigation.navigate('TopUpScreen')}
              />
              <Text style={styles.textMenu}>Top Up</Text>
            </View>
            <View style={styles.jarakMenu}>
              <Button size="small" bordernya="menu" logo="qrpay" onPress={() => navigation.navigate('QrScreen')} />
              <Text style={styles.textMenu}>QR Pay</Text>
            </View>
            <View style={styles.jarakMenu}>
              <Button size="small" bordernya="menu" logo="transfer" onPress={() => navigation.navigate('TransferScreen')} />
              <Text style={styles.textMenu}>Transfer</Text>
            </View>
          </View>
        </View>
        <View style={styles.history}></View>
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
    right: -10,
    top: 0,
  },
  wrapperAtas: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: 25,
  },
  fotoprofil: {
    borderRadius: 100,
    width: 60,
    height: 60,
    borderWidth: 1,
    borderColor: 'white',
  },
  text1: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: 'white',
  },
  text2: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 14,
    color: 'white',
  },
  wrapperNama: {
    paddingHorizontal: 10,
  },
  kontenAtas: {
    flex: 4,
    backgroundColor: 'white',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  wrapperKontenAtas: {
    paddingTop: 70,
    paddingHorizontal: 25,
  },
  textSaldo1: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#25282B',
  },
  textSaldo2: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 30,
    color: '#25282B',
  },
  wrapperSaldo: {
    position: 'absolute',
    top: 30,
    left: 25,
  },
  jarakMenu: {
    paddingHorizontal: 35,
  },
  wrapperMenu: {
    flexDirection: 'row',
    paddingTop: 45,
    paddingBottom: 20,
    justifyContent: 'center',
  },
  textMenu: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#25282b',
    paddingTop: 10,
    textAlign: 'center',
  },
  history: {
    flex: 1,
    backgroundColor: '#eaeaea',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingVertical: 70,
    paddingHorizontal: 25,
  },
});
