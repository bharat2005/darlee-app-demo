import { View, Text, FlatList, Pressable } from 'react-native'
import React, { useMemo } from 'react'
import CardListTitle from './CardListTitle'
import { useCards } from '../../../hooks/useCards'
import { router } from 'expo-router'

const CardList = ({listData}) => {
  const {data, error, hasNextPage, isFetchingNextPage, fetchNextPage} = useCards(listData?.id)
    

  const cleanedList = useMemo(()=> {
    return data?.pages?.flatMap(page => page.list)
  })

    const renderItem = ({item, index}) => (
        <View style={{height:'100%', width:160, paddingHorizontal:4}}>

            <Pressable onPress={()=> router.push({pathname:'/magScreen', params:{id:item?.docId }})} style={{height:'100%', width:'100%', backgroundColor:'black', borderRadius:8}}>
              <Text style={{color:'white', textAlign:'center', marginVertical:'auto'}}>{item?.titleText}</Text>
            </Pressable>

        </View>
    )

  return (
    <View style={{height:200, width:'100%',}}>
        
        <CardListTitle listData={listData} />

        <FlatList
        horizontal
        onEndReached={(hasNextPage && !isFetchingNextPage) && fetchNextPage}
        onEndReachedThreshold={0}
        ListFooterComponent={isFetchingNextPage && <View  style={{height:160, width:160, paddingHorizontal:4}}><View  style={{height:'100%', width:'100%', backgroundColor:'lightgray', borderRadius:8}} /></View>}
        data={cleanedList}
        renderItem={renderItem}
        keyExtractor={(item, index)=> index.toString()}

        />


    </View>
  )
}

export default CardList