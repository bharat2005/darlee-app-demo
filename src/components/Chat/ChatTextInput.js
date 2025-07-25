import { View, Text, TouchableOpacity, TextInput, Keyboard } from 'react-native'
import React, { useEffect, useState } from 'react'
import { geminiMessageSend } from '../../services/gemini/geminiMessageSend'
import Feather from '@expo/vector-icons/Feather'
import MyColors from '../../constants/MyColors'
import { Entypo } from '@expo/vector-icons'


const ChatTextInput = ({setMessagesList, setLoading, loading}) => {
    const [text, setText] = useState('')
    const [isKeyboardVisible, setIsKeyboardVisible] = useState(false)

    useEffect(()=>{
      const unsubOpenKeyboard = Keyboard.addListener(
        'keyboardDidShow',
        ()=>setIsKeyboardVisible(true)
      )
      const unsubCloseKeyboard = Keyboard.addListener(
        'keyboardDidHide',
        ()=>setIsKeyboardVisible(false)
      )

      return ()=>{
        unsubOpenKeyboard.remove()
        unsubCloseKeyboard.remove()
      } 
    },[])

    const handleSend = async() => {
        if(!text.trim()) return
        const t = text
        setText('')
        // setLoading(true)
        setMessagesList(prev => [ {role:'user', text: t, createdAt: new Date()},...prev])
        // const res = await geminiMessageSend(t)
        // if(res?.success){
        //   setLoading(false)
        // } 


    }


  return (
    <View style={{width:'100%', flexDirection:'row', alignItems:'flex-end', padding:4,paddingVertical:8, backgroundColor:'white'}}>

      

{
  isKeyboardVisible && (
    <TouchableOpacity disabled={loading} onPress={()=> Keyboard.dismiss()} style={{height:50, alignItems:'center', justifyContent:'center', paddingHorizontal:4}} >
    <Entypo name="chevron-small-down" size={24} color={MyColors.DARK_BLUE} />
    </TouchableOpacity>
  )
}


      <View style={{flex:1, paddingHorizontal:8 }}>



        <TextInput
        placeholder='Ask anything!'
        value={text}
        multiline
        numberOfLines={6}
        style={{ fontSize:18, paddingHorizontal:12, minHeight:48, backgroundColor:'lightgray',borderRadius:8}}
        onChangeText={(v)=> setText(v)}
        />


      </View>




            <TouchableOpacity disabled={loading} onPress={handleSend} style={{height:50, alignItems:'center', justifyContent:'center', paddingHorizontal:8}} >
            <Feather name="send" size={24} color={MyColors.DARK_BLUE} />
            </TouchableOpacity>
 
        
    </View>
  )
}

export default ChatTextInput