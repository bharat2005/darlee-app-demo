import { View, Text, Dimensions, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { format } from 'date-fns'
import DatePicker, {} from 'react-native-date-picker'

const DateInputCard = ({primaryText, isSecondaryText, secondaryText, value, setFeildValue}) => {
  const [open, setOpen] = useState('')
  return (
    <View style={{width:'100%',paddingHorizontal:4}}>
     
     <View style={{width:'100%', borderRadius:12, backgroundColor:'white', padding:12, gap:18}}>

        <Text style={{fontSize:16, fontWeight:'700'}}>{primaryText}</Text>

        {isSecondaryText && (
            <Text style={{fontSize:14, fontWeight:'400', color:'gray'}}>{secondaryText}</Text>
        )}


        <TouchableOpacity style={{width:'100%', borderWidth:1, borderColor:'black', borderRadius:6, justifyContent:'space-between', paddingHorizontal:8, alignItems:'center'}}>
          <Text>{format(value, 'yyyy/MM/dd')}</Text>
          
        </TouchableOpacity>



      <DatePicker
        modal
        title={'Date of Birth'}
        open={open}
        mode='date'
        date={value}
        onConfirm={(date) => {
          setOpen(false)
          setFeildValue(date)
        }}
        onCancel={() => {
          setOpen(false)
        }}
      />







     </View>

    </View>
  )
}

export default DateInputCard