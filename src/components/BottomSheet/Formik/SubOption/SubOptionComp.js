import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const SubOptionComp = ({ value, setFieldValue, item}) => {
    const [selectedOption, setSelectedOption] = useState(value)

    const handleOption = (option) =>{
        const isSelected = selectedOption === option 
        setSelectedOption(isSelected ? '' : option)
        setFieldValue(isSelected ? '' : option)
    }

  return (
    <View style={{width: '100%', gap:12}}>
    <Text style={{fontSize:16, fontWeight:'bold'}}>{item.title}</Text>

    <View>
        {
            item?.subOptions?.map((subItem, index)=> (
                <View key={index} style={{height:54, width:'100%', padding:2}}>
                   <TouchableOpacity onPress={()=> handleOption(subItem)} style={{justifyContent:'center', alignItems:'center',width:'100%', height:'100%', backgroundColor:selectedOption === subItem ? 'rgb(86, 204, 255)' : 'lightgray', borderRadius:16}}>
                    <Text>{subItem}</Text>
                   </TouchableOpacity>
                </View>
            ))
        }
    </View>
</View>
  )
}

export default SubOptionComp