import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { AntDesign } from '@expo/vector-icons'
import { useMessageResponse } from '../../hooks/useMessageResponse'
import { useMutateMessageResponse } from '../../hooks/useMutateMessageResponse'

const responseButtons = [
    {
        id: 'like',
        icon: <AntDesign name="like2" size={18} color="black" /> 
    },
        {
        id: 'dislike',
        icon: <AntDesign name="dislike2" size={18} color="black" />
    }
]

const MessageResponse = (messageId) => {
    const {data: pastResponse} = useMessageResponse(messageId)
    const {mutate: mutateMessageResponse} = useMutateMessageResponse(messageId)

  return (
    <View style={{width:'100%', flexDirection:'row', justifyContent:'flex-start', alignItems:'center', paddingHorizontal:18, paddingVertical:6, gap:12}}>
        {
            responseButtons.map((item, index)=> (
                <TouchableOpacity onPress={()=> mutateMessageResponse({currentResponse: item.id, pastResponse})} key={index} style={{ padding:6, backgroundColor: pastResponse ? 'blue' : 'gray', borderRadius:24}}>
                    {item.icon}
                </TouchableOpacity>
            ))
        }
    </View>
  )
}

export default MessageResponse