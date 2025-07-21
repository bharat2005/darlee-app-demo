import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { router } from 'expo-router'
import AntDesign from '@expo/vector-icons/AntDesign';

const TransHeader = () => {
  return (
    <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', paddingHorizontal:12, paddingVertical:12}}>
    <TouchableOpacity onPress={()=> router.back()}>
        <AntDesign name="arrowleft" size={24} color="rgb(89, 89, 89)" />
    </TouchableOpacity>
    </View>
  )
}

export default TransHeader