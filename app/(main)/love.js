import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const LOVE = () => {
  return (
    <SafeAreaView style={{flex:1, backgroundColor:'white', justifyContent:'center', alignItems:'center'}}>
      <Text style={{fontSize:38, color:'black', fontFamily:'Outfit-Medium'}}>LOVE</Text>
    </SafeAreaView>
  )
}

export default LOVE