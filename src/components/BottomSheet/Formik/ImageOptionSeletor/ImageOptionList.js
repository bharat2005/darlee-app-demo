import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Image } from 'expo-image'

const ImageOptionList = ({data}) => {
  const [selectedOption, setSelectedOption] = useState(null)

  const handleSelectOption = (optionId) => {
    const isSelected = selectedOption === optionId
    setSelectedOption(isSelected ? null : optionId)
  }

  return (
    <View style={{width: 340, marginHorizontal: 'auto',marginVertical:12, flexDirection:'row', flexWrap: 'wrap'}}>
            {
                data?.options.map((item, index) => (
                    <View key={index} style={{width:340/5, padding: 2}}>
                        <TouchableOpacity onPress={() => handleSelectOption(item?.optionId)}>
                            <Image style={{width: '100%', height: 60, backgroundColor:selectedOption === item.optionId ? 'red' : 'gray'}} />
                        </TouchableOpacity>
                        <Text numberOfLines={1} style={{textAlign:'center', fontSize:12}}>{item.optionName}</Text>
                    </View>
                ))
            }
    </View>
  )
}

export default ImageOptionList