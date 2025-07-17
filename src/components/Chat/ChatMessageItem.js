import { View, Text } from 'react-native'
import React from 'react'

const ChatMessageItem = ({item}) => {
  return (
    <View style={{width:'100%', flexDirection:"row", paddingHorizontal:8}}>

        <View style={{minHeight:55, paddingHorizontal:18, justifyContent:'center', alignItems:'center'}}>
            {item?.text}
        </View> 

        <View style={{height:'100%'}}>
            <Text style={{marginTop:'auto'}}>{}</Text>
        </View>
        
    </View>
  )
}

export default ChatMessageItem