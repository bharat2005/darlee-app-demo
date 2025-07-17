import { View, Text, FlatList } from 'react-native'
import React from 'react'
import CardList from './CardList'

const SelfCare = () => {
  return (
    <View style={{flex:1, width:'100%'}}>


      <FlatList
      contentContainerStyle={{gap:12, paddingHorizontal:4}}
      data={[...Array(10)]}
      keyExtractor={(item, index)=> index.toString()}
      showsHorizontalScrollIndicator={false}
      renderItem={({item, index})=> <CardList listData={item} />}
      />
      
    </View>
  )
}

export default SelfCare