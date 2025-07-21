import { View, Text } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const TipComp = ({text}) => {
  return (
    <View style={{flexDirection:'row', alignItems:'center', gap:4, paddingHorizontal:12, paddingVertical:8, marginVertical:22, backgroundColor:'white', borderRadius:12 }}>
      <MaterialCommunityIcons name="lightbulb-on-outline" size={24} color="black" />
      
      <Text style={{fontFamily:'Outfit-Light', fontSize:14, color:'black', flex:1}}>{text}</Text>
    </View>
  )
}

export default TipComp