import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import Images from '../../constants/Images'
import { Feather } from '@expo/vector-icons'
import MyColors from '../../constants/MyColors'

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
    <View style={{width:'100%', gap:12}}>

        {
            array.map((item, index)=> (
                <TouchableOpacity activeOpacity={0.7} onPress={()=> handleOptionSelect(item?.id)} key={item?.id} style={{flexDirection:'row', alignItems:'center', paddingHorizontal:18, height:67, width:'100%', backgroundColor:'white', borderRadius:20}}>

                    <Image source={Images[item?.id]} style={{height:38, width:38}} />

                    <Text style={{marginHorizontal:18, fontSize:16, fontFamily:'Outfit-Medium', color:'black'}}>{item?.label}</Text>


                    {
                      localSelection.some(i => i === item?.id) && (
                        <View style={{ borderRadius:20, position:'absolute', right:0, marginHorizontal:24}} >
                          <Feather name="check" size={24} color={MyColors.PRIMARY} />
                        </View>
                      )
                    }

                </TouchableOpacity>
            ))
        }
     
    </View>
  )
}

export default SmallList