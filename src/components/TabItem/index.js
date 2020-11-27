import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import HomeIcon from '../../assets/icons/homeicon.svg';
import HomeIconAktif from '../../assets/icons/homeiconaktif.svg';
import TransaksiIcon from '../../assets/icons/transaksimenu.svg';
import TransaksiIconAktif from '../../assets/icons/transaksimenuaktif.svg';
import ProfilIcon from '../../assets/icons/profilmenu.svg';
import ProfilIconAktif from '../../assets/icons/profilmenuaktif.svg';

export default function TabItem({label, isFocused, onLongPress, onPress}) {
  const Icon = () => {
    if (label === 'Home') {
      return isFocused ? <HomeIconAktif /> : <HomeIcon />;
    }
    if (label === 'Transaksi') {
      return isFocused ? <TransaksiIconAktif /> : <TransaksiIcon />;
    }
    if (label === 'Profil') {
      return isFocused ? <ProfilIconAktif /> : <ProfilIcon />;
    }
  };

  return (
    <TouchableOpacity
      accessibilityRole="button"
      accessibilityState={isFocused ? {selected: true} : {}}
      onPress={onPress}
      onLongPress={onLongPress}
      style={isFocused ? styles.TombolFocus : styles.Tombol}>
      <View style={styles.wrapperIcon}>
        <Icon />
      </View>
      {isFocused && <Text style={{paddingLeft: 10, color: '#F53B50', fontFamily: 'Poppins-Medium'}}>{label}</Text>}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  Tombol: {
    flexDirection: 'row',
    alignContent: 'center',
    paddingHorizontal: 10
  },
  TombolFocus: {
    alignContent: 'center',
    backgroundColor: '#eaeaea',
    borderRadius: 10,
    padding: 10,
    flexDirection: 'row'
  },
  wrapperIcon: {
    alignItems: 'center',
    justifyContent: 'center'
  }
});
