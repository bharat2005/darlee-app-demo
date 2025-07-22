import { View, Text } from 'react-native'
import React from 'react'
import { format } from 'date-fns'
import MessageResponse from './MessageResponse'
import MyColors from '../../constants/MyColors'

const ChatMessageItem = ({item}) => {

  if(item?.type === 'date'){
    return (
      <View style={{width:'100%', height:30, justifyContent:'center', alignItems:'center', marginVertical:18}} >
          <View style={{backgroundColor:'black', paddingHorizontal:12, height:'100%', borderRadius:8, justifyContent:'center', alignItems:'center'}} >
            <Text style={{color:'white', fontSize:14, fontFamily:'Outfit-Regular'}}>{item?.label}</Text>
          </View>
      </View>
    )
  }



  return (
  <View style={{ paddingHorizontal:16, paddingVertical:12}}>
    <View style={{width:'100%',flexDirection:item?.role === 'user' ? "row-reverse" : "row"}}>

        <View style={{minHeight:48, maxWidth:300, padding:14, justifyContent:'center', alignItems:'center', backgroundColor:item?.role === 'user' ?'white' : MyColors.CHAT_BOX_PINK, borderRadius:12}}>
            <Text style={{fontSize:14, fontFamily:'Outfit-Regular', color:item?.role === 'user' ? 'black' : 'black'}}>{item?.text}</Text>
        </View>

        <View style={{paddingHorizontal:8, paddingVertical:5}}>
          <Text style={{marginTop:'auto', fontSize:12, fontFamily:'Outfit-Regular', color:item?.role === 'user' ? 'black' : 'black'}}>{item?.createdAt ? format(item?.createdAt.toDate(), 'hh:mm'): null}</Text>
        </View>
        
    </View>
    

    {
      item?.role === 'model' && <MessageResponse messageId={item?.id} />
    }    
    </ View>
  )
}

export default ChatMessageItem