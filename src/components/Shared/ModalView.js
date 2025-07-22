import { View, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import AntDesign from '@expo/vector-icons/AntDesign';
import HomeModalView from './HomeModalView'
import PeriodCalanderModalView from '../Shared/PeriodCaleanderModalVeiw'

const modalData = {
    'home': {
        title:'Graph Description',
    },
    'chat': {
        title:'Chat',
    },
    'periodCalander': {
        title:'Calander Description',
    },
    'calander': {
        title:'Calander',
    },
}

const ModalView = ({setVisible, type}) => {
  return (
    <View style={{width:320, padding:28, borderRadius:12, backgroundColor:'white', marginVertical:'auto', alignSelf:'center', gap:18}}>
        <TouchableOpacity onPress={()=> setVisible(false)} style={{position:'absolute', top:18, right:18}}>
            <AntDesign name="close" size={22} color="gray" />
        </TouchableOpacity>


        <Text style={{fontSize:18, fontFamily:'Outfit-Medium', marginVertical:8, textAlign:'center'}}>{modalData[type]?.title}</Text>

            {
                type === 'home' && (
                    <HomeModalView />
                )
            }
                   {
                type === 'chat' && (
                 <></>
                )
            }
            
            {
                type === 'periodCalander' && (
                   <PeriodCalanderModalView />
                )
            }
            {
                type === 'calander' && (
                    <></>
                )
            }

    </View>
  )
}

export default ModalView