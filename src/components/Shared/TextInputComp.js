import { View, Text } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-paper'

const TextInputComp = ({value, onChangeText}) => {
  return (
    <TextInput mode='outlined' value={value} onChangeText={onChangeText} right={ value && <TextInput.Icon icon='close' onPress={()=> onChangeText('')} />} />
  )
}

export default TextInputComp