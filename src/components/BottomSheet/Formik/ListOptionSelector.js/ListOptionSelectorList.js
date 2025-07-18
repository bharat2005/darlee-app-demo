import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'



const ListOptionSelectorList = ({handleOption,  selectedOption, setSelectedOption}) => {


  return (
    <View style={{width: '100%', flexDirection: 'row', height: 60, overflow:'hidden', borderRadius:18, marginVertical:12}}>
      {
        ['None', 'Few', 'Ordinary', 'Many']?.map((item, index)=> (
            <View key={index} style={{height:'100%', width:'25%', padding:1}}>
                <TouchableOpacity onPress={()=> handleOption(item)} style={{height:'100%', width:'100%', backgroundColor: selectedOption === item ? 'rgb(86, 204, 255)' : 'lightgray', justifyContent:'center', alignItems:'center'}}>
                    <Text>{item}</Text>
                </TouchableOpacity>
            </View>
        ))
      }
    </View>
  )
}

export default ListOptionSelectorList