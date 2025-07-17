import { View, Text, FlatList } from 'react-native'
import React, { useMemo } from 'react'
import CardList from './CardList'
import { useCardList } from '../../../hooks/useCardList'

const HormoneGuide = ({type}) => {
  const {data, error, fetchNextPage, isFetchingNextPage, hasNextPage} = useCardList(type)


  const cleandedList = useMemo(()=> {
    return data?.pages?.flatMap(page => page?.list) || []
  })



  return (
    <View style={{flex:1, width:'100%'}}>

      <FlatList
      contentContainerStyle={{gap:12, paddingHorizontal:4}}
      data={cleandedList}
      onEndReached={(hasNextPage && !isFetchingNextPage) && fetchNextPage}
      onEndReachedThreshold={0}
      keyExtractor={(item, index)=> index.toString()}
      showsHorizontalScrollIndicator={false}
      renderItem={({item, index})=> <CardList listData={item} />}
      />
      
    </View>
  )
}

export default HormoneGuide