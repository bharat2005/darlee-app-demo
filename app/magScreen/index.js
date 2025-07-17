import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useLocalSearchParams } from 'expo-router'

const MagScreen = () => {
    const {id} = useLocalSearchParams()

  return (
    <SafeAreaView style={{flex:1, width:'100%'}}>
            <Text>{id}</Text>
    </SafeAreaView>
  )
}

export default MagScreen