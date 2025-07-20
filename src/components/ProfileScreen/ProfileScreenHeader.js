import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { router } from 'expo-router'

const ProfileScreenHeader = ({user}) => {
  return (
    <View style={{height:55, backgroundColor:'white', width:'100%', flexDirection:'row', alignItems:'center', paddingHorizontal:12, justifyContent:'center'}}>

    <Text style={{fontSize:18, fontWeight:'700'}}>{user?.name}</Text>

    <TouchableOpacity onPress={()=>router.back()} style={{position:'absolute', left:0, top:0, bottom:0, justifyContent:'center', alignItems:'center',  marginHorizontal:12, height:'100%'}}>
        <Ionicons name="arrow-back" size={24} color="gray" />
    </TouchableOpacity>
    </View>
  )
}

export default ProfileScreenHeader