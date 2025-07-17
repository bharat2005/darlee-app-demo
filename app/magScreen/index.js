import { View, Text } from 'react-native'
import React, { useMemo } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useLocalSearchParams } from 'expo-router'
import { useCardHydrate } from '../../src/hooks/useCardHydrate'
import MagScreenTopBar from '../../src/components/MagScreen/MagScreenTopBar'
import { useAllStarred } from '../../src/hooks/useAllStarred'

const MagScreen = () => {
    const {cardId, type} = useLocalSearchParams()
    const {data} = useAllStarred({
      staleTime:Infinity
    })
    const {data:fuckData, error} = useCardHydrate(cardId)

const starredCardIds = useMemo(()=> {
  return data?.map(item => item?.docId)
},[data])




  return (
    <SafeAreaView style={{flex:1, width:'100%'}}>

        <MagScreenTopBar cardId={cardId} isStarred={starredCardIds.includes(cardId)} type={type} />

        <Text>{fuckData?.description}</Text>
        
    </SafeAreaView>
  )
}

export default MagScreen