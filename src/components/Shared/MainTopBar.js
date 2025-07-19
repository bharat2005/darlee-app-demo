import { View, Text, TouchableOpacity, Modal, TouchableWithoutFeedback } from 'react-native'
import React, { useState } from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import ModalView from './ModalView';
import { router } from 'expo-router';

const MainTopBar = ({title="for my baby girl", type='home'}) => {
    const [visible, setVisible] = useState(false)
  return (
    <View style={{height:55, backgroundColor:'white', width:'100%', flexDirection:'row', alignItems:'center', paddingHorizontal:12, justifyContent:'center'}}>

        {
            type === 'home' && (
                <TouchableOpacity onPress={()=>{}} style={{position:'absolute', left:0,top:0, bottom:0, justifyContent:'center', alignItems:'center',  marginHorizontal:12, height:'100%'}}>
                    <Ionicons name="person" size={24} color="gray" />
                </TouchableOpacity>
            )
        }

{
            type === 'periodCalander' && (
                <TouchableOpacity onPress={()=>router.back()} style={{position:'absolute', left:0, top:0, bottom:0, justifyContent:'center', alignItems:'center',  marginHorizontal:12, height:'100%'}}>
                  <Ionicons name="arrow-back" size={24} color="gray" />
                </TouchableOpacity>
            )
        }

        <Text style={{fontSize:18, fontWeight:'700'}}>{title}</Text>


                <TouchableOpacity onPress={()=>setVisible(true)} style={{position:'absolute', right:0, marginHorizontal:16, borderWidth:2, borderColor:'gray', borderRadius:6}}>
                   <Ionicons name="information" size={28} color="black" />
                </TouchableOpacity>




                <Modal onRequestClose={()=> setVisible(false)} visible={visible} backdropColor={1} animationType='fade'>
                    <TouchableWithoutFeedback onPress={()=> setVisible(false)}>
                        <View style={{flex:1}}>
                            <ModalView setVisible={setVisible} type={type} />
                        </View>
                    </TouchableWithoutFeedback>

                </Modal>
      
    </View>
  )
}

export default MainTopBar