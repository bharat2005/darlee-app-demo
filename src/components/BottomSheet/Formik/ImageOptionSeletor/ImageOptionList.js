import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Image } from 'expo-image'
import Images from '../../../../constants/Images'
import { MaterialIcons } from '@expo/vector-icons'
import MyColors from '../../../../constants/MyColors'

const ImageOptionList = ({data, value, setFieldValue}) => {
  const [selectedOption, setSelectedOption] = useState(value)

  const handleSelectOption = (optionId) => {
    const isSelected = selectedOption === optionId
    setSelectedOption(isSelected ? '' : optionId)
    setFieldValue(isSelected ? '' : optionId)
  }

  return (
    <View style={{width: 340, marginHorizontal: 'auto',marginVertical:12, flexDirection:'row', flexWrap: 'wrap'}}>
            {
                data?.options.map((item, index) => (

                    <View key={index} style={{width:340/5, padding: 2, marginBottom:12}}>
                      {selectedOption === item.optionId && 
                      <View style={{position:'absolute', top:2, right:6, backgroundColor:MyColors.DARK_GREY, zIndex:1000, justifyContent:'center', alignItems:'center', borderRadius:'50%', padding:4}}>
                      <MaterialIcons name="done" size={12} color="white" />
                      </View>}

                        <TouchableOpacity activeOpacity={0.5} onPress={() => handleSelectOption(item?.optionId)}>
                            <Image source={Images[item?.optionId]} style={{width:50, height: 50, marginHorizontal: 'auto'}} />
                        </TouchableOpacity>
                        <Text numberOfLines={2} style={{textAlign:'center', fontSize:11, fontFamily:'Outfit-Medium',}}>{item.optionName}</Text>
                    </View>
                ))
            }
    </View>
  )
}

export default ImageOptionList