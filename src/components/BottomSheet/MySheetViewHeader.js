import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';

const MySheetViewHeader = ({handlSheet}) => {
  return (
    <View style={{width:'100%', height:44, flexDirection:'row', justifyContent:'center', alignItems:'center'}}>

        <View style={{width:'30%', height:44, justifyContent:'center', alignItems:'center'}}>
            <Text>Record</Text>
        </View>

        <TouchableOpacity style={{position:'absolute', right:0, marginHorizontal:18}} onPress={()=> handlSheet('close')}>
            <AntDesign name='close' size={24} color='gray' />
        </TouchableOpacity>
        
    </View>
  )
}

export default MySheetViewHeader