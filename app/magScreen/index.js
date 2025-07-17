import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useLocalSearchParams } from 'expo-router'
import { useCardHydrate } from '../../src/hooks/useCardHydrate'
import MagScreenTopBar from '../../src/components/MagScreen/MagScreenTopBar'

const MagScreen = () => {
    const {id} = useLocalSearchParams()
    const {data, error} = useCardHydrate(id)


  return (
    <SafeAreaView style={{flex:1, width:'100%'}}>

        <MagScreenTopBar id={id} />

        <Text>{data?.description}</Text>
        
    </SafeAreaView>
  )
}

export default MagScreen