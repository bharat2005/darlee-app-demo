import { View, Text, TouchableOpacity, Modal } from 'react-native'
import React, { useState } from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';

const MainTopBar = ({title="for my baby girl", type='home'}) => {
    const [visible, setVisible] = useState(false)
  return (
    <View style={{height:55, width:'100', flexDirection:'row', alignItems:'center', paddingHorizontal:12, justifyContent:'center', alignItems:'center'}}>

        {
            type === 'home' && (
                <TouchableOpacity onPress={()=>{}} style={{position:'absolute', left:0, marginHorizontal:12, height:'100%'}}>
                    <Ionicons name="person" size={24} color="gray" />
                </TouchableOpacity>
            )
        }

        <Text style={{fontSize:18, fontWeight:'700'}}>{title}</Text>


                <TouchableOpacity onPress={()=>{}} style={{position:'absolute', right:0, marginHorizontal:12, height:'100%', borderWidth:2, borderColor:'gray', borderRadius:6}}>
                    <Ionicons name="person" size={24} color="gray" />
                </TouchableOpacity>




                <Modal visible={visible} onDismiss={()=> setVisible(false)} animationType='fade'>

                    <ModalView />

                </Modal>
      
    </View>
  )
}

export default MainTopBar