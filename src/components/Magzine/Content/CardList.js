import { View, Text, FlatList, Pressable } from 'react-native'
import React, { useMemo } from 'react'
import CardListTitle from './CardListTitle'
import { useCards } from '../../../hooks/useCards'
import { router } from 'expo-router'
import Card from '../../Shared/Card'

const CardList = ({listData, type, starredCardIds}) => {
   const {data : cleanedList, error, hasNextPage, isFetchingNextPage, fetchNextPage} = useCards(listData?.id)
    

  // const cleanedList = useMemo(()=> {
  //   return data?.pages?.flatMap(page => page.list)
  // })





  return (
    <View style={{height:190, width:'100%',}}>
        
        <CardListTitle listData={listData} />

        <FlatList
        horizontal
        style={{paddingHorizontal:12}}
        showsHorizontalScrollIndicator={false}
        //onEndReached={(hasNextPage && !isFetchingNextPage) && fetchNextPage}
        //onEndReachedThreshold={0}
        //ListFooterComponent={isFetchingNextPage && <View  
        //  style={{height:160, width:160, paddingHorizontal:4}}><View  style={{height:'100%', width:'100%', backgroundColor:'lightgray', borderRadius:8}} /></View>}
        data={cleanedList}
        renderItem={({item, index})=> <Card type={type} cardData={item} isStarred={starredCardIds.includes(item?.docId)} />}
        keyExtractor={(item, index)=> index.toString()}

        />


    </View>
  )
}

export default CardList