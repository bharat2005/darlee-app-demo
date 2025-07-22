import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import MyColors from '../../../../constants/MyColors'

const SubOptionComp = ({ value, setFieldValue, item}) => {
    const [selectedOption, setSelectedOption] = useState(value)

    const handleOption = (option) =>{
        const isSelected = selectedOption === option 
        setSelectedOption(isSelected ? '' : option)
        setFieldValue(isSelected ? '' : option)
    }

  return (
    <View style={{width: '100%', gap:12}}>
    <Text style={{fontSize:16, fontFamily:'Outfit-Medium'}}>{item.title}</Text>

    <View>
        {
            item?.subOptions?.map((subItem, index)=> (
                <View key={index} style={{height:52, width:'100%', padding:2}}>
                   <TouchableOpacity activeOpacity={0.7} onPress={()=> handleOption(subItem)} style={{justifyContent:'center', alignItems:'center',width:'100%', height:'100%', backgroundColor: selectedOption === subItem ? 'rgba(19, 184, 255, 0.49)' : 'rgb(228, 228, 228)', borderRadius:18}}>
                    <Text style={{fontSize:15, fontFamily:'Outfit-Medium', color:'black'}}>{subItem}</Text>
                   </TouchableOpacity>
                </View>
            ))
        }
    </View>
</View>
  )
}

export default SubOptionComp