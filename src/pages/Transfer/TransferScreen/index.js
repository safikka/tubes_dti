import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import Button from '../../../components/Button';
import Logo from '../../../assets/icons/Logo.svg';
import Circle from '../../../assets/icons/circle.svg';
import Circle2 from '../../../assets/icons/circle2.svg';

export default function TransferScreen({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.logowrapper}>
        <Circle style={styles.circle} />
        <Circle2 style={styles.circle2} />
        <View>
          <Logo height={120} />
          <Text style={styles.logotext}>Transfer!</Text>
        </View>
      </View>
      <View style={styles.footer}>
        <View style={{paddingBottom: 25}}>
          <TextInput placeholder="Nominal Transfer" style={styles.input} />
        </View>
        <Button
          text="Submit"
          type="filled"
          onPress={() => navigation.navigate('TopUpNotif')}
        />
        <Button
          text="Kembali"
          type="outlined"
          bordernya="outlined"
          onPress={() => navigation.navigate('HomeScreen')}
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
      paddingVertical: 50,
      paddingHorizontal: 25,
    },
    input: {
      borderWidth: 1,
      borderRadius: 10,
      borderColor: '#C4c4c4',
      paddingHorizontal: 15,
      fontFamily: 'Poppins-Regular',
    },
  });
  
