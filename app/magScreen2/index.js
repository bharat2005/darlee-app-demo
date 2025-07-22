import { View, Text, FlatList, Image } from 'react-native'
import React, { useMemo } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useLocalSearchParams } from 'expo-router'
import { useCardHydrate } from '../../src/hooks/useCardHydrate'
import MagScreenTopBar from '../../src/components/MagScreen/MagScreenTopBar'
import { useAllStarred } from '../../src/hooks/useAllStarred'
import MyColors from '../../src/constants/MyColors'
import { LinearGradient } from 'expo-linear-gradient'
import { Ionicons } from '@expo/vector-icons'

const MagScreen2 = () => {
    const {cardId, type} = useLocalSearchParams()
    const {data} = useAllStarred({
      staleTime:Infinity
    })
    const {data:fuckData, error} = useCardHydrate(cardId)

const starredCardIds = useMemo(()=> {
  return data?.map(item => item?.docId)
},[data])




  return (
    <SafeAreaView style={{flex:1, width:'100%', backgroundColor:'white'}}>
      <View style={{flex:1, width:'100%', backgroundColor:MyColors.DARK_BLUE}}>

        <View style={{height:'90%', width:'100%'}}>
          <LinearGradient colors={[MyColors.HORMONE_TOP, MyColors.HORMONE_BOTTOM]} style={{height:'100%', width:'100%', borderRadius:8, position:'absolute', top:0, left:0, right:0, bottom:0, zIndex:-5}} start={{x:0, y:0}} end={{x:0, y:1}} />







        </View>
       
      </View>   
    </SafeAreaView>
  )
}

export default MagScreen2