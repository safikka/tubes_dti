import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import Circle from '../../assets/icons/circle.svg';
import Circle2 from '../../assets/icons/circle2.svg';
import Button from '../../components/Button';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.kontenAtas}>
        <Circle style={styles.circle} />
        <Circle2 style={styles.circle2} />
        <View style={styles.wrapperFoto}>
          <Image
            style={styles.fotoprofil}
            source={{
              uri:
                'https://i.pinimg.com/236x/ce/2a/95/ce2a95e99faceaf7af19c273b10ebcc1.jpg',
            }}
          />
        </View>
        <Text style={styles.text2}>Mahdy Syafiqa Jannata</Text>
        <Text style={styles.text1}>085732158989</Text>
      </View>
      <View style={styles.footer}>
        <View style={styles.wrapperButton}>
          <Button text="Ubah Profil" type="filled" onPress={() => alert('Ubah Profil')} />
          <Button text="Ubah Password" type="filled" onPress={() => alert('Ubah Password')} />
          <Button text="Log Out" type="filled" onPress={() => alert('Log Out')} />
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
  fotoprofil: {
    borderRadius: 100,
    width: 150,
    height: 150,
    borderWidth: 1,
    borderColor: 'white',
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
  wrapperFoto: {
    paddingVertical: 20,
  },
  text1: {
    fontFamily: 'Poppins-Regular',
    fontSize: 18,
    color: 'white',
  },
  text2: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
    color: 'white',
  },
  kontenAtas: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  footer: {
    flex: 1,
    backgroundColor: 'white',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingVertical: 70,
    paddingHorizontal: 25,
  },
  wrapperButton: {
    position: 'absolute',
    paddingHorizontal: 25,
    paddingVertical: 60,
  },
});
