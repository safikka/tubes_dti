import React from 'react';
import {Text, View} from 'react-native';
import Transaksi from '../../assets/icons/transaksi.svg';

const Kotakan = ({item}) => {
  const styleKotakan = {
    backgroundColor: 'white',
    borderRadius: 10,
    height: 100,
  };
  const wrapperKotak = {
    flex: 1,
    flexDirection: 'row',
  };
  const wrapperLogo = {
    backgroundColor: '#F53B50',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  };
  const textHistory = {
    fontFamily: 'Poppins-Medium',
    fontSize: 20,
    color: '#25282b',
  };
  const textHistory2 = {
    fontFamily: 'Poppins-Regular',
    fontSize: 10,
    color: '#25282b',
  };
  const wrapperText = {
    flex: 3,
    paddingTop: 25,
    paddingLeft: 10,
  };
  const wrapperTanggal = {
    flex: 1,
    padding: 10,
  };
  const paddingKotak ={
    paddingBottom: 20,
  };

  return (
    <View style={paddingKotak}>
      <View style={styleKotakan}>
        <View style={wrapperKotak}>
          <View style={wrapperLogo}>
            <Transaksi />
          </View>
          <View style={wrapperText}>
            <Text style={textHistory}>Rp. {item.price}</Text>
            <Text style={textHistory2}>Transfer ke {item.account}</Text>
          </View>
          <View style={wrapperTanggal}>
            <Text style={textHistory2}>{item.date}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Kotakan;
