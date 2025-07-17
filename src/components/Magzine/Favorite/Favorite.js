import { View, Text, FlatList } from 'react-native'
import React, { useMemo } from 'react'
import StarredCardList from './StarredCardList'


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


const Favorite = ({data}) => {

const starredCardList = useMemo(()=> {
  return myArray.map(item => ({
    ...item,
    starredCardsIds: data?.filter(i => i?.type === item?.type).map(i => i.docId)
  }))
}, [data])





  return (
    <View style={{flex:1 , width:'100%'}}>

      
       <FlatList
      contentContainerStyle={{gap:12, paddingHorizontal:4}}
      data={starredCardList}
      keyExtractor={(item, index)=> index.toString()}
      showsHorizontalScrollIndicator={false}
      renderItem={({item, index})=> <StarredCardList listData={item}/>}
      /> 

    </View>
  )
}

export default Favorite