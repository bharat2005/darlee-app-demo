import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useLocalSearchParams } from 'expo-router'

const TextScreen = () => {
    const {id} = useLocalSearchParams()
    

    
    
  return (
    <SafeAreaView style={{flex:1, justifyContent:'center', alignItems:'center'}}>
      <Text>{id}</Text>
    </SafeAreaView>
  )
}

export default TextScreen