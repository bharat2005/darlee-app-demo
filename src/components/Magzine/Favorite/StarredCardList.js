import { View, Text, FlatList, Pressable } from 'react-native'
import React, { useMemo } from 'react'
import CardListTitle from '../Content/CardListTitle'
import { useCards } from '../../../hooks/useCards'
import { router } from 'expo-router'
import Card from '../../Shared/Card'
import { useStarredCards } from '../../../hooks/useStarredCards'

const StarredCardList = ({listData}) => {
  if(listData?.starredCardsIds?.length === 0) return
  const {data = [], error} = useStarredCards(listData?.starredCardsIds, listData?.type)




  return (
    <View style={{height:200, width:'100%',}}>
        
         <CardListTitle listData={listData} />

        <FlatList
        horizontal
        data={data}
        renderItem={({item, index})=> <Card type={listData?.type} cardData={item} isStarred={listData?.starredCardsIds?.includes(item?.docId)} />}
        keyExtractor={(item, index)=> index.toString()}

        /> 


    </View>
  )
}

export default StarredCardList