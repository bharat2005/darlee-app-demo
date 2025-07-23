import { View, Text, FlatList, Image, BackHandler } from 'react-native'
import React, { useEffect, useMemo, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { router, useLocalSearchParams } from 'expo-router'
import { useCardHydrate } from '../../src/hooks/useCardHydrate'
import MagScreenTopBar from '../../src/components/MagScreen/MagScreenTopBar'
import { useAllStarred } from '../../src/hooks/useAllStarred'
import MyColors from '../../src/constants/MyColors'
import { LinearGradient } from 'expo-linear-gradient'
import { Ionicons } from '@expo/vector-icons'
import Mag2FlatIndicator from '../../src/components/Mag2Screen/Mag2FlatIndicator'
import MagScreenBoxView from '../../src/components/Mag2Screen/MagScreenBoxView'
import MagScreenBottomView from '../../src/components/Mag2Screen/MagScreenBottomView'



const MagScreen2 = () => {
  const {cardId, type} = useLocalSearchParams()
  const [currentIndex, setCurrentIndex] = useState(0)
  const {data} = useAllStarred({
    staleTime:Infinity
  })
  const {data:fuckData, error} = useCardHydrate(cardId)

const starredCardIds = useMemo(()=> {
return data?.map(item => item?.docId)
},[data])


  
    

    useEffect(()=> {
      const unsub = BackHandler.addEventListener('hardwareBackPress', ()=> {
        return true
      })
      return ()=> {
        unsub.remove()
      }

    },[])






  return (
    <SafeAreaView style={{flex:1, width:'100%', backgroundColor:'white'}}>
      <View style={{flex:1, width:'100%', backgroundColor:MyColors.DARK_GREY, paddingTop:12}}>

<MagScreenBoxView currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} cardId={cardId} type={type} starredCardIds={starredCardIds} fuckData={fuckData} />

<MagScreenBottomView currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} cardId={cardId} type={type} isStarred={starredCardIds.includes(cardId)} fuckData={fuckData} />
      
      </View>   
    </SafeAreaView>
  )
}

export default MagScreen2