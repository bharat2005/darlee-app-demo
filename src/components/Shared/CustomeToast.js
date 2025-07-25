import { View, Text } from 'react-native'
import React from 'react'
import Foundation from '@expo/vector-icons/Foundation';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const CustomeToast = ({text1, text2, props}) => {
  return (
    <View style={{backgroundColor:'white', borderRadius:18}}>
    <View style={{ borderRadius:18,alignItems:'center', backgroundColor: props?.type === 'error' ? 'rgba(255, 0, 0, 0.18)' : 'rgba(0, 255, 0, 0.18)',flexDirection:'row', gap:8, paddingHorizontal:18, paddingVertical:16}}>
   {
    props?.type === 'error' ? (
        <Foundation name="alert" size={24} color="rgb(255, 0, 0)" />
    ) : (
 
        <View style={{backgroundColor:'green', borderRadius:'50%', justifyContent:'center', alignItems:'center', padding:2}}>
      <MaterialIcons name="done" size={18} color="white" />
        </View>
     
    )
   }
   
   <Text style={{fontSize:14, fontFamily:'Outfit-Medium', color:props?.type === 'error' ? "rgb(255, 0, 0)" : "green"}}>{text2}</Text>
    </View>
    </View>
  )
}

export default CustomeToast