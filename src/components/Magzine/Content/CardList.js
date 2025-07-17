import { View, Text, FlatList, Pressable } from 'react-native'
import React from 'react'
import CardListTitle from './CardListTitle'

const CardList = ({listData}) => {
    

    const renderItem = () => (
        <View style={{height:'100%', width:160, paddingHorizontal:4}}>

            <Pressable style={{height:'100%', width:'100%', backgroundColor:'black', borderRadius:8}}>

            </Pressable>

        </View>
    )

  return (
    <View style={{height:200, width:'100%',}}>
        
        <CardListTitle listData={listData} />

        <FlatList
        horizontal
        data={[...Array(10)]}
        renderItem={renderItem}
        keyExtractor={(item, index)=> index.toString()}

        />


    </View>
  )
}

export default CardList