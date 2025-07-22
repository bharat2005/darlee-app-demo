import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { router } from 'expo-router'
import MyColors from '../../constants/MyColors'

const ScreenHeader = ({title}) => {
  return (
    <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center', paddingHorizontal:16, paddingVertical:10, height:50, backgroundColor:'white'}}>
     <TouchableOpacity onPress={()=>router.back()} style={{position:'absolute', left:16}}>
        <Ionicons name='arrow-back' size={24} color='gray' />
     </TouchableOpacity>
     
     
      <Text style={{fontSize:18, fontFamily:'Outfit-Medium', color:MyColors.DARK_BLUE}}>{title}</Text>
    </View>
  )
}

export default ScreenHeader