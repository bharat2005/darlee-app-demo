import { View, Text, FlatList } from 'react-native'
import React from 'react'

const ChatList = ({messagesList=[]}) => {
  return (
    <View style={{flex:1, width:'100%', backgroundColor:'pink'}}>

        <FlatList 
        data={messagesList}
        keyExtractor={(item, index)=> index.toString()}
        renderItem={({item,index})=> <ChatMessageItem />}
        />
    </View>
  )
}

export default ChatList