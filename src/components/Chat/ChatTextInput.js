import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import { geminiMessageSend } from '../../services/gemini/geminiMessageSend'

const ChatTextInput = ({setMessagesList, setLoading}) => {
    const [text, setText] = useState('')

    const handleSend = async() => {
        if(!text.trim()) return
        const t = text
        setText('')
        setLoading(true)
        setMessagesList(prev => [ {role:'user', text: t},...prev])
        const res = await geminiMessageSend(t)
        if(res?.success){
          setLoading(false)
        } 


    }


  return (
    <View style={{width:'100%', flexDirection:'row', height:55}}>

        <TextInput
        value={text}
        multiline
        style={{flex:1 ,height:'100%', backgroundColor:'lightgray', paddingHorizontal:12, fontSize:18}}
        onChangeText={(v)=> setText(v)}
        />

        <View style={{width:'18%', padding:2}}>
            <TouchableOpacity onPress={handleSend} style={{height:'100%', width:'100%', backgroundColor:'black'}} />
        </View>
        
    </View>
  )
}

export default ChatTextInput