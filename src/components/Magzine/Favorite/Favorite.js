import { View, Text, FlatList, Dimensions } from 'react-native'
import React, { useMemo, useState } from 'react'
import StarredCardList from './StarredCardList'
import MyColors from '../../../constants/MyColors'


const myArray = [
  {
    title: 'Your Starred Self Care',
    type: 'selfCare'
  },
   {
    title: 'Your Starred Hormone Guide',
    type: 'hormoneGuide'
  },
]


const Favorite = ({data, isLoading, refetch, isFetching}) => {

const starredCardList = useMemo(()=> {
  return myArray.map(item => ({
    ...item,
    starredCardsIds: data?.filter(i => i?.type === item?.type).map(i => i.docId)
  }))
}, [data])






  return (
    <View style={{flex:1 , width:'100%'}}>

      
       <FlatList
      //  refreshing={isFetching}
      //  onRefresh={refetch}
      contentContainerStyle={{gap:12, paddingHorizontal:4}}
      data={starredCardList}
     // ListEmptyComponent={<View style={{height:Dimensions.get('screen').height - 220, width:'100%', justifyContent:'center', alignItems:'center'}}><Text style={{fontSize:16, fontFamily:'Outfit-Medium', color:MyColors.DARK_BLUE}}>No Starred Cards!</Text></View>}
      keyExtractor={(item, index)=> index.toString()}
      showsHorizontalScrollIndicator={false}
      renderItem={({item, index})=> <StarredCardList listData={item}/>}
      /> 

    </View>
  )
}

export default Favorite