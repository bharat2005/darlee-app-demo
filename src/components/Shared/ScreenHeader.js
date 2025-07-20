import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { router } from 'expo-router'

const ScreenHeader = ({title}) => {
  return (
    <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center', paddingHorizontal:16, paddingVertical:10, height:50, backgroundColor:'white'}}>
     <TouchableOpacity onPress={()=>router.back()} style={{position:'absolute', left:16}}>
        <Ionicons name='arrow-back' size={24} color='black' />
     </TouchableOpacity>
     
     
      <Text style={{fontSize:16, fontWeight:'bold'}}>{title}</Text>
    </View>
  )
}

export default ScreenHeader