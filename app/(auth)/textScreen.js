import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useLocalSearchParams } from 'expo-router'
import { useText } from '../../src/hooks/useText'

const TextScreen = () => {
    const {id} = useLocalSearchParams()
    const {data:textData, error} = useText(id)

    console.log(textData, error)

    
    
  return (
    <SafeAreaView style={{flex:1, justifyContent:'center', alignItems:'center'}}>
      <Text style={{textAlign:'center'}}>{textData}</Text>
    </SafeAreaView>
  )
}

export default TextScreen