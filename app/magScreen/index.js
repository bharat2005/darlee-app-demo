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
      <LinearGradient colors={['white', MyColors.SCREEN_BOX_COLOR]} style={{position:'absolute', top:0, left:0, right:0, bottom:0, zIndex:-1}} />
      
      <View style={{flexDirection:'row', justifyContent:'flex-start'}}>
      {
        item?.step && (
          <View style={{backgroundColor:MyColors.DARK_BLUE, borderRadius:24, width:28, height:28, alignItems:'center', justifyContent:'center', marginRight:8, marginTop:6}}>
            <Text style={{fontSize:18, fontFamily:'Outfit-Medium', color:'white'}}>{item?.step}</Text>
          </View>
        )
      }
      <Text style={{fontSize:22, fontFamily:'Outfit-Bold', color:MyColors.DARK_BLUE}}>{item?.primaryText}</Text>

      </View>
    
      
      {
        item?.time && (
          <View style={{backgroundColor:MyColors.DARK_BLUE, borderRadius:24, width:65, gap:4, alignItems:'center', flexDirection:'row', justifyContent:'center', paddingVertical:2, marginTop:6}}>
            <Ionicons name="time-outline" size={14} color="white" />
            <Text style={{fontSize:14, fontFamily:'Outfit-Medium', color:'rgb(255, 255, 255)'}}>{item?.time} min</Text>
          </View>
        )
      }
      
      
      
      <Text style={{fontSize:14, fontFamily:'Outfit-Medium', color:'rgb(84, 88, 111)'}}>{item?.secondaryText}</Text>
      <Image source={item?.boxImage} style={{width:'100%', height:200, borderRadius:8}} />
    </View>
  )
}


  return (
    <SafeAreaView style={{flex:1, width:'100%', backgroundColor:'white'}}>

        <MagScreenTopBar cardId={cardId} isStarred={starredCardIds.includes(cardId)} type={type} />

{
  fuckData?.stepsData ? (

    <FlatList
    data={fuckData?.stepsData}
    renderItem={renderItem}
    ListFooterComponent={<View style={{height:8}} />}
    keyExtractor={(item, index)=> index.toString()}
    contentContainerStyle={{gap:18, paddingVertical:12, paddingHorizontal:14}}
    />

  ) :(
    <View style={{flex:1, width:'100%', backgroundColor:'white', alignItems:'center', justifyContent:'center'}}>
      <Text style={{fontSize:18, fontFamily:'Outfit-Medium', color:MyColors.DARK_BLUE}}>No data here!</Text>
    </View>
  )
}

        
    </SafeAreaView>
  )
}

export default MagScreen