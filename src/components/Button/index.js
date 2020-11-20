import React from 'react'
import { Text, View, TouchableOpacity, Dimensions } from 'react-native'


const width = Dimensions.get('window').width


const Button = ({ text, onPress, type = 'filled', bordered = false, size = 'large' }) => {
  const large = width / 1.16
  const small = width / 2
  const btnSize = size === 'large' ? large : small
  const btnBgColor = type === 'filled' ? '#F53B50' : 'transparent'
  const btnTextColor = type === 'filled' ? '#ffffff' : '#F53B50'
  const btnBorderRadius = bordered ? 30 : 10

  const containerCommonStyle = {
    backgroundColor: btnBgColor,
    paddingVertical: 16,
    width: btnSize,
    borderRadius: btnBorderRadius
  }

  const textCommonStyle = {
    color: btnTextColor,
    fontSize: 14,
    textAlign: 'center',
    fontFamily: 'Poppins-SemiBold'
  }

  const border = type === 'outlined' && { borderColor: '#F53B50', borderWidth: 1 }

  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
      <View style={[containerCommonStyle, border]}>
        <Text style={[textCommonStyle]}> {text} </Text>
      </View>
    </TouchableOpacity>
  )
}

export default Button