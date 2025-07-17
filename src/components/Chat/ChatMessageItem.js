import { View, Text } from 'react-native'
import React from 'react'
import { format } from 'date-fns'

const ChatMessageItem = ({item}) => {
  return (
    <View style={{width:'100%',flexDirection:item?.role === 'user' ? "row-reverse" : "row", paddingHorizontal:8, paddingVertical:12}}>

        <View style={{minHeight:48, maxWidth:300, padding:14, justifyContent:'center', alignItems:'center', backgroundColor:'white', borderRadius:8}}>
            <Text>{item?.text}</Text>
        </View>

        <View style={{paddingHorizontal:8, paddingVertical:5}}>
          <Text style={{marginTop:'auto'}}>{item?.createdAt ? format(item?.createdAt.toDate(), 'hh:mm'): null}</Text>
        </View>
        
    </View>
  )
}

export default ChatMessageItem