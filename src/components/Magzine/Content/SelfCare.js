import { View, Text, FlatList, ActivityIndicator } from 'react-native'
import React, { useMemo, useState } from 'react'
import CardList from './CardList'
import { useCardList } from '../../../hooks/useCardList'

const SelfCare = ({type, starredCardIds}) => {
  const {data : cleandedList} = useCardList(type)
  const [refreshing, setRefreshing] = useState(false)

  // const cleandedList = useMemo(()=> {
  //   return data?.pages?.flatMap(page => page?.list) || []
  // })

  const handleRefresh = async () => {
    setRefreshing(true)
    await new Promise(resolve => setTimeout(resolve, 1000))
    setRefreshing(false)
  }



  return (
    <View style={{flex:1, width:'100%'}}>

      <FlatList
      refreshing={refreshing}
      onRefresh={handleRefresh}
      contentContainerStyle={{gap:24, paddingHorizontal:4, paddingVertical:18}}
      data={cleandedList}
     // ListFooterComponent={isFetchingNextPage && <View style={{ width:'100%', padding:12}} ><ActivityIndicator color={'black'} size={44}  style={{alignSelf:'center'}} /></View>}
     // onEndReached={(hasNextPage && !isFetchingNextPage) && fetchNextPage}
     // onEndReachedThreshold={0}
      keyExtractor={(item, index)=> index.toString()}
      showsHorizontalScrollIndicator={false}
      renderItem={({item, index})=> <CardList starredCardIds={starredCardIds} type={type} listData={item} />}
      />
      
    </View>
  )
}

export default SelfCare