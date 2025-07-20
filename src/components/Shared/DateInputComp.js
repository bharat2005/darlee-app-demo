import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Entypo, Ionicons } from '@expo/vector-icons'
import { DatePicker } from 'react-native-date-picker'

const DateInputComp = ({label, value = new Date(), setDate}) => {
    const [showDatePicker, setShowDatePicker] = useState(false)
  return (
    <View>
      <TouchableOpacity onPress={()=> setShowDatePicker(true)} style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between'}} >
        <Text>{label}</Text>
        <Entypo name="chevron-down" size={24} color="black" />
      </TouchableOpacity>

      <DatePicker
         modal
        mode='date'
        date={value}
       onConfirm={(date)=> {setDate(date); setShowDatePicker(false)}}
       onCancel={()=> setShowDatePicker(false)}
      />
    </View>
  )
}

export default DateInputComp