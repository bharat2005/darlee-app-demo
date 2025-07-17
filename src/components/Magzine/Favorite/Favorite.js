import { View, Text, FlatList } from 'react-native'
import React from 'react'



const Favorite = () => {
  return (
    <View style={{flex:1 , width:'100%'}}>

      
      <FlatList
      contentContainerStyle={{gap:12, paddingHorizontal:4}}
      data={[]}
      keyExtractor={(item, index)=> index.toString()}
      showsHorizontalScrollIndicator={false}
      renderItem={({item, index})=> <CardList starredCardIds={starredCardIds} type={type} listData={item} />}
      />

    </View>
  )
}

export default Favorite