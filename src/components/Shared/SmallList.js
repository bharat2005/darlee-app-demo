import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'

const SmallList = ({array=[], setFieldValue}) => {
  const [localSelection, setLoacalSelection] = useState([])

  const handleOptionSelect = (id) => {
    const isSelected = localSelection.some(item => item === id )
    let updated;
    if(isSelected){
      updated = [...localSelection.filter(item => item !== id)]
    } else {
      updated = [...localSelection, id]
    }
    setLoacalSelection(updated)
    setFieldValue(updated)
  }


  return (
    <View style={{width:'100%', gap:12, padding:18}}>

        {
            array.map((item, index)=> (
                <TouchableOpacity onPress={()=> handleOptionSelect(item?.id)} key={item?.id} style={{flexDirection:'row', alignItems:'center', paddingHorizontal:8, height:58, width:'100%', backgroundColor:'white', borderRadius:6}}>

                    <Image style={{height:30, width:30, backgroundColor:'pink'}} />

                    <Text style={{marginHorizontal:18}}>{item?.label}</Text>


                    {
                      localSelection.some(i => i === item?.id) && (
                        <View style={{height:40, width:40, backgroundColor:"green", borderRadius:20, position:'absolute', right:0, marginHorizontal:24}} />
                      )
                    }

                </TouchableOpacity>
            ))
        }
     
    </View>
  )
}

export default SmallList