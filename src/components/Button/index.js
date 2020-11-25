import React from 'react';
import {Text, View, TouchableOpacity, Dimensions} from 'react-native';
import Topup from '../../assets/icons/topup.svg';
import QrPay from '../../assets/icons/qrpay.svg';
import Transfer from '../../assets/icons/transfer.svg';

const width = Dimensions.get('window').width;

const Button = ({
  text,
  onPress,
  type,
  bordered = false,
  size = 'large',
  bordernya,
  logo,
}) => {
  const large = width / 1.16;
  const small = width / 7;
  const btnSize = size === 'large' ? large : small;
  const btnBgColor = type === 'filled' ? '#F53B50' : 'white';
  const btnTextColor = type === 'filled' ? '#ffffff' : '#F53B50';
  const btnBorderRadius = bordered ? 30 : 10;

  const containerCommonStyle = {
    backgroundColor: btnBgColor,
    paddingVertical: 16,
    width: btnSize,
    borderRadius: btnBorderRadius,
  };

  const textCommonStyle = {
    color: btnTextColor,
    fontSize: 14,
    textAlign: 'center',
    fontFamily: 'Poppins-SemiBold',
  };

  const outlined = {borderColor: '#F53B50', borderWidth: 1};
  const menu = {borderColor: '#25282b', borderStyle: 'dashed', borderWidth: 1};
  const border =
    bordernya === 'outlined'
      ? outlined
      : null || bordernya === 'menu'
      ? menu
      : null;

  const stylelogo = {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  };
  const wrapperLogo = {position: 'absolute'};
  const logonya =
    logo === 'topup' ? (
      <Topup />
    ) : null || logo === 'qrpay' ? (
      <QrPay />
    ) : null || logo === 'transfer' ? (
      <Transfer />
    ) : null;

  const buttonGede = (
    <View style={{paddingBottom: 20}}>
      <View style={[containerCommonStyle, border]}>
        <Text style={[textCommonStyle]}> {text} </Text>
      </View>
    </View>
  );
  const buttonKecil = (
    <View style={{paddingBottom: 10}}>
      <View style={[containerCommonStyle, border]}>
        <View style={stylelogo}>
          <View style={wrapperLogo}>{logonya}</View>
        </View>
      </View>
    </View>
  );

  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
      {size === 'large' ? buttonGede : buttonKecil}
    </TouchableOpacity>
  );
};

export default Button;
