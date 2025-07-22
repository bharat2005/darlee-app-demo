import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import MyColors from '../../../../constants/MyColors'



const ListOptionSelectorList = ({handleOption,  selectedOption, setSelectedOption}) => {


  return (
    <View style={{width: '100%', flexDirection: 'row', height: 54, overflow:'hidden', borderRadius:18, marginVertical:12}}>
      {
        ['None', 'Few', 'Ordinary', 'Many']?.map((item, index)=> (
            <View key={index} style={{height:'100%', width:'25%', padding:1}}>
                <TouchableOpacity activeOpacity={0.7} onPress={()=> handleOption(item)} style={{height:'100%', width:'100%', backgroundColor: selectedOption === item ? 'rgba(19, 184, 255, 0.49)' : 'lightgray', justifyContent:'center', alignItems:'center'}}>
                    <Text style={{fontSize:15, fontFamily:'Outfit-Medium', color:MyColors.DARK_GREY}}>{item}</Text>
                </TouchableOpacity>
            </View>
        ))
      }
    </View>
  )
}

export default ListOptionSelectorList