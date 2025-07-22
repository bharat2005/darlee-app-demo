import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import OptionsHeader from '../OptionsHeader'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import SubOptionBox from '../SubOption/SubOptionBox';

const BoolOptionSelector = ({data,value, setFieldValue, subValues, setSubFieldValue, nested}) => {
    const [loaclBoolValue, setLocalBoolValue] = useState(value)

    const handleBoolValue = () => {
        setLocalBoolValue(!loaclBoolValue)
        setFieldValue(!loaclBoolValue)
    }

  return (
    <View style={{width: '100%'}}>
        <OptionsHeader data={data} />

        <View style={{ marginRight:'auto', marginVertical:12, marginHorizontal:38}}>
            <TouchableOpacity activeOpacity={0.7} onPress={handleBoolValue} style={{flexDirection:'row', alignItems:'center', gap:12, overflow:'hidden'}}>
                <View style={{width: 44, height: 44, borderRadius: 12, backgroundColor:loaclBoolValue ? 'rgba(19, 184, 255, 0.49)' : 'lightgray', justifyContent:'center', alignItems:'center'}}>
                <MaterialIcons name="done" size={18} color={loaclBoolValue ? 'black' : 'gray'} />
                </View>
                <Text style={{fontSize: 16, fontFamily:'Outfit-Light'}}>{data?.miniTitle}</Text>
            </TouchableOpacity>
        </View>


        {
            (loaclBoolValue && nested) && (
               <SubOptionBox data={data} subValues={subValues} setFieldValue={setSubFieldValue} />
            )
        }




    </View>
  )
}

export default BoolOptionSelector