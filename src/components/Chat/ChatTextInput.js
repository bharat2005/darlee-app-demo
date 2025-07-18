import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import { geminiMessageSend } from '../../services/gemini/geminiMessageSend'


const ChatTextInput = ({setMessagesList, setLoading, loading}) => {
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
    <View style={{width:'100%', flexDirection:'row', alignItems:'flex-end', padding:4, backgroundColor:'pink'}}>

      <View style={{flex:1, paddingHorizontal:2 }}>

        <TextInput
        value={text}
        multiline
        numberOfLines={6}
        style={{ fontSize:18, paddingHorizontal:12, minHeight:53, backgroundColor:'white',borderRadius:8, borderWidth:1, borderColor:'black'}}
        onChangeText={(v)=> setText(v)}
        />


      </View>



        <View style={{width:75, height:50}}>
            <TouchableOpacity disabled={loading} onPress={handleSend} style={{height:'100%', width:'100%', backgroundColor:'black'}} />
        </View>
        
    </View>
  )
}

export default ChatTextInput