import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-paper'

const ChatTextInput = () => {
    const [text, setText] = useState('')

    const handleSend = async() => {
        if(!text.trim()) return
        const t = text
        setText('')
        
    }


  return (
    <View style={{width:'100%', flexDirection:'row', height:55}}>

        <TextInput 
        mode='outlined'
        style={{width:'85%'}}
        onChangeText={(v)=> setText(v)}
        />

        <View style={{flex:1, height:'100%', padding:2}}>
            <TouchableOpacity style={{height:'100%', width:'100%', backgroundColor:'black'}} />
        </View>
        
    </View>
  )
}

export default ChatTextInput