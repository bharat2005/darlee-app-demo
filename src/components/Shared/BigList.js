import { View, Text, TouchableOpacity } from 'react-native'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { useFocusEffect } from 'expo-router'
import MyColors from '../../constants/MyColors'

const BigList = ({array, setFieldValue, handleNextPress}) => {
    const [selectedOption, setSelectedOption] = useState('')
    const lockedRef = useRef(false)

    useFocusEffect(useCallback(()=> {
        lockedRef.current = false
    }))


    const handleOptionSelect = (id) =>  {
        if(lockedRef.current) return
        lockedRef.current = true

        setSelectedOption(id)  
        setFieldValue(id)
       
        setTimeout (() => { 
            handleNextPress();
        }, 300)
    }


  return (
    <View style={{width:'100%', padding:12, gap:14}}>
        {
            array.map((item, index)=> (
                <TouchableOpacity activeOpacity={0.7} onPress={()=> handleOptionSelect(item?.id)} key={item?.id} style={{flexDirection:'row', alignItems:'center', paddingHorizontal:24, height:75, width:'100%', backgroundColor: selectedOption === item?.id ? MyColors.LIGHT_PRIMARY : 'white', borderRadius:18}}>
                    <Text style={{fontSize:15, fontFamily:'Outfit-Medium', color:selectedOption === item?.id ? MyColors.DARK_GREY : 'black'}}>{item?.label}</Text>
                </TouchableOpacity>
            ))
        }
    </View>
  )
}

export default BigList