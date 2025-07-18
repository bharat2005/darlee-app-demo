import { View, Text } from 'react-native'
import React from 'react'
import { format } from 'date-fns'
import MessageResponse from './MessageResponse'

const ChatMessageItem = ({item}) => {

  if(item?.type === 'date'){
    return (
      <View style={{width:'100%', height:30, justifyContent:'center', alignItems:'center', marginVertical:18}} >
          <View style={{backgroundColor:'black', paddingHorizontal:12, height:'100%', borderRadius:8, justifyContent:'center', alignItems:'center'}} >
            <Text style={{color:'white'}}>{item?.label}</Text>
          </View>
      </View>
    )
  }



  return (
  <View style={{ paddingHorizontal:12, paddingVertical:12}}>
    <View style={{width:'100%',flexDirection:item?.role === 'user' ? "row-reverse" : "row"}}>

        <View style={{minHeight:48, maxWidth:300, padding:14, justifyContent:'center', alignItems:'center', backgroundColor:'white', borderRadius:8}}>
            <Text>{item?.text}</Text>
        </View>

        <View style={{paddingHorizontal:8, paddingVertical:5}}>
          <Text style={{marginTop:'auto'}}>{item?.createdAt ? format(item?.createdAt.toDate(), 'hh:mm'): null}</Text>
        </View>
        
    </View>
    

    {
      item?.role === 'model' && <MessageResponse messageId={item?.id} />
    }    
    </ View>
  )
}

export default ChatMessageItem