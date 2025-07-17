import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useLocalSearchParams } from 'expo-router'
import { useCardHydrate } from '../../src/hooks/useCardHydrate'
import MagScreenTopBar from '../../src/components/MagScreen/MagScreenTopBar'
import { useAllStarred } from '../../src/hooks/useAllStarred'

const MagScreen = () => {
    const {cardId, type} = useLocalSearchParams()
    const {data: starredCardIds} = useAllStarred({
      staleTime:Infinity
    })
    const {data, error} = useCardHydrate(cardId)






  return (
    <SafeAreaView style={{flex:1, width:'100%'}}>

        <MagScreenTopBar cardId={cardId} isStarred={starredCardIds.includes(cardId)} type={type} />

        <Text>{data?.description}</Text>
        
    </SafeAreaView>
  )
}

export default MagScreen