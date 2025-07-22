import { View, Text, FlatList, Image } from 'react-native'
import React, { useMemo } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useLocalSearchParams } from 'expo-router'
import { useCardHydrate } from '../../src/hooks/useCardHydrate'
import MagScreenTopBar from '../../src/components/MagScreen/MagScreenTopBar'
import { useAllStarred } from '../../src/hooks/useAllStarred'
import MyColors from '../../src/constants/MyColors'
import { LinearGradient } from 'expo-linear-gradient'

const MagScreen = () => {
    const {cardId, type} = useLocalSearchParams()
    const {data} = useAllStarred({
      staleTime:Infinity
    })
    const {data:fuckData, error} = useCardHydrate(cardId)

const starredCardIds = useMemo(()=> {
  return data?.map(item => item?.docId)
},[data])


const renderItem = ({item})=> {
  return (
    <View style={{flex:1, width:'100%', padding:12, borderRadius:18, overflow:'hidden'}}>
      <LinearGradient colors={[MyColors.SCREEN_BOX_COLOR, '#FFF1EE']} style={{position:'absolute', top:0, left:0, right:0, bottom:0, zIndex:-1}} />
      <Text style={{fontSize:22, fontFamily:'Outfit-Bold', color:MyColors.DARK_BLUE}}>{item?.primaryText}</Text>
      <Text style={{fontSize:14, fontFamily:'Outfit-Medium', color:MyColors.DARK_BLUE}}>{item?.secondaryText}</Text>
      <Image source={{uri:item?.boxImage}} style={{width:'100%', height:200, borderRadius:8}} />
    </View>
  )
}

  return (
    <SafeAreaView style={{flex:1, width:'100%'}}>

        <MagScreenTopBar cardId={cardId} isStarred={starredCardIds.includes(cardId)} type={type} />

        <FlatList
        data={fuckData?.stepsData}
        renderItem={renderItem}
        keyExtractor={(item, index)=> index.toString()}
        contentContainerStyle={{gap:18, padding:12, paddingHorizontal:14}}
        />
        
    </SafeAreaView>
  )
}

export default MagScreen