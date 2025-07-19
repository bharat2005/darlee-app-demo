import { View, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import AntDesign from '@expo/vector-icons/AntDesign';

const modalData = {
    'home': {
        title:'Home',
    },
    'chat': {
        title:'Chat',
    },
    'periodCalander': {
        title:'Period Calander',
    },
}

const ModalView = ({setVisible, type}) => {
  return (
    <View style={{width:300, padding:16, borderRadius:12, backgroundColor:'white', marginVertical:'auto', alignSelf:'center'}}>
        <TouchableOpacity onPress={()=> setVisible(false)} style={{position:'absolute', top:12, right:12}}>
            <AntDesign name="close" size={24} color="gray" />
        </TouchableOpacity>


        <Text style={{fontSize:18, fontWeight:'700', marginVertical:12, textAlign:'center'}}>{modalData[type]?.title}</Text>

            {
                type === 'home' && (
                    <></>
                )
            }
                   {
                type === 'chat' && (
                    <Text>rough dfhif eiufhue f sebfhh fiuhf diufhhwff  fwudhfwoieu wewifuuhwef wioufhweef weifuh</Text>
                )
            }
            
            {
                type === 'periodCalander' && (
                    <Text>jjdff ofhjw fodhf diudhv ivuh vfiuhvu sviuvh divh vss suih</Text>
                )
            }

    </View>
  )
}

export default ModalView