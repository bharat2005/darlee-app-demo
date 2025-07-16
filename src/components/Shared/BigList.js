import { View, Text, TouchableOpacity } from 'react-native'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { useFocusEffect } from 'expo-router'

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
    <View style={{width:'100%', padding:12, gap:12}}>
        {
            array.map((item, index)=> (
                <TouchableOpacity onPress={()=> handleOptionSelect(item?.id)} key={item?.id} style={{flexDirection:'row', alignItems:'center', paddingHorizontal:8, height:80, width:'100%', backgroundColor: selectedOption === item?.id ? 'green' : 'white', borderRadius:6}}>
                    <Text>{item?.label}</Text>
                </TouchableOpacity>
            ))
        }
    </View>
  )
}

export default BigList