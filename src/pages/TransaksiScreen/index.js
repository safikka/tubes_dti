import React from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import Kotakan from '../../components/Kotakan';
import DataDummy from '../../components/DataDummy';

export default function TransaksiScreen({item}) {
  return (
    <View style={styles.container}>
      <Text style={styles.textContainer}>Riwayat transaksi kamu :</Text>
      <View style={{paddingTop: 10}}>
        <FlatList
          data={DataDummy.dataTransfer}
          renderItem={Kotakan}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eaeaea',
    paddingVertical: 30,
    paddingHorizontal: 25,
  },
  textContainer: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#25282b',
    paddingTop: 10,
    textAlign: 'center',
  },
});
