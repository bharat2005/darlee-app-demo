import { View, Text, TouchableOpacity, Modal, TouchableWithoutFeedback } from 'react-native'
import React, { useCallback, useRef, useState } from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import ModalView from './ModalView';
import { router, useFocusEffect } from 'expo-router';

const MainTopBar = ({title="for my baby girl", type='home', bgColor}) => {
    const navigationRef = useRef(false)
    const [visible, setVisible] = useState(false)



    useFocusEffect(
        useCallback(()=> {
            navigationRef.current = false
        })
    )


  return (
    <View style={{height:55, backgroundColor: bgColor || 'white', width:'100%', flexDirection:'row', alignItems:'center', paddingHorizontal:12, justifyContent:'center'}}>

        {
            type === 'home' && (
                <TouchableOpacity activeOpacity={0.7} onPress={()=>{
                    if(navigationRef.current) return
                    navigationRef.current = true
                    router.push('/profileScreen')
                }} style={{position:'absolute', left:0,top:0, bottom:0, justifyContent:'center', alignItems:'center',  marginHorizontal:12, height:'100%'}}>
                 <Ionicons name="person-outline" size={24} color="rgb(60, 60, 60)" />
                </TouchableOpacity>
            )
        }

{
            type === 'periodCalander' && (
                <TouchableOpacity activeOpacity={0.7} onPress={()=>{
                    if(navigationRef.current) return
                    navigationRef.current = true
                    router.back()
                }} style={{position:'absolute', left:0, top:0, bottom:0, justifyContent:'center', alignItems:'center',  marginHorizontal:18, height:'100%'}}>
                  <Ionicons name="arrow-back" size={24} color="gray" />
                </TouchableOpacity>
            )
        }

        <Text style={{fontSize:19, fontFamily:'Outfit-Bold'}}>{title}</Text>


                <TouchableOpacity activeOpacity={0.7} onPress={()=>setVisible(true)} style={{position:'absolute', right:0, marginHorizontal:18, borderWidth:2, borderColor:'rgb(60, 60, 60)', borderRadius:6}}>
                   <Ionicons name="information" size={20} color="rgb(60, 60, 60)" />
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