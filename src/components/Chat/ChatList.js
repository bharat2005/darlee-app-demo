import { View, Text, FlatList, ActivityIndicator } from 'react-native'
import React from 'react'
import ChatMessageItem from './ChatMessageItem'

const ChatList = ({messagesList=[], loading}) => {
  return (
    <View style={{flex:1, width:'100%', backgroundColor:'pink'}}>

        <FlatList 
        inverted
        contentContainerStyle={{paddingVertical:12}}
        ListHeaderComponent={ loading && <View style={{flexDirection:'row', width:'100%', height:48, paddingHorizontal:24}}><ActivityIndicator color='black' size={30} /></View>}
        data={messagesList}
        keyExtractor={(item, index)=> index.toString()}
        renderItem={({item,index})=> <ChatMessageItem item={item} />}
        />
    </View>
  )
}

export default ChatList