import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';
import { router } from 'expo-router';

const MagScreenTopBar = () => {
  return (
    <View style={{width:'100%', height:55, flexDirection:'row', alignItems:'center', paddingHorizontal:12 }}>

        <TouchableOpacity style={{marginRight:'auto'}} onPress={()=> router.back()}>
            <AntDesign name="arrowleft" size={24} color="gray" />
        </TouchableOpacity>
        
    </View>
  )
}

export default MagScreenTopBar