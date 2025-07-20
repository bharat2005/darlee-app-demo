import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { router, useLocalSearchParams } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'

const TPScreenHeader = ({id}) => {

  return (
    <View style={{width:'100%', flexDirection:'row', justifyContent:'center', alignItems:'center', paddingHorizontal:12, height:55}}>
      <Text style={{fontSize:16, fontWeight:'700'}}>{id === 'terms' ? 'Terms of Service' : 'Privacy Policy'}</Text>

      <TouchableOpacity style={{position:'absolute', left:12}} onPress={()=> router.back()}>
        <Ionicons name='arrow-back' size={24} color='black' />
      </TouchableOpacity>
    </View>
  )
}

export default TPScreenHeader