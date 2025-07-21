import { View, Text, Dimensions, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { format } from 'date-fns'
import DatePicker, {} from 'react-native-date-picker'
import Feather from '@expo/vector-icons/Feather';
import MyColors from '../../constants/MyColors'

const DateInputCard = ({primaryText, isSecondaryText, secondaryText, value, setFeildValue, exPrimaryText, exSecondaryText, expandable}) => {
  const [open, setOpen] = useState('')
  const [isExpanded, setIsExpanded] = useState(false)
  return (
    <View style={{width:'100%',paddingHorizontal:4}}>
     
     <View style={{width:'100%', borderRadius:24, backgroundColor:'white', padding:18, gap:18, elevation:1}}>

     <Text style={{fontSize:16, fontFamily:'Outfit-Medium'}}>{primaryText}{" "}{" "}
          <Text style={{fontSize:14, color:'red', fontFamily:'Outfit-Light'}}>Required*</Text>
        </Text>

        {isSecondaryText && (
            <Text style={{fontSize:14, fontWeight:'400', color:'gray'}}>{secondaryText}</Text>
        )}


        <TouchableOpacity onPress={()=> setOpen(true)} activeOpacity={0.6} style={{width:'100%', marginBottom:12, height:50, flexDirection:'row', borderWidth:1, borderColor:MyColors.PRIMARY, borderRadius:6, justifyContent:'space-between', paddingHorizontal:12, alignItems:'center'}}>
          <Text style={{fontSize:16, fontFamily:'Outfit-Light'}}>{format(value, 'yyyy/MM/dd')}</Text>
          <Feather name="chevron-down" size={24} color={MyColors.PRIMARY} />
        </TouchableOpacity>



        {expandable && (
        <TouchableOpacity activeOpacity={0.6} onPress={()=> setIsExpanded(prev => !prev)} style={{width:'100%'}}>
          <Text style={{fontFamily:'Outfit-Medium',fontSize:14, color:'black'}}>{exPrimaryText}</Text>
        </TouchableOpacity>
        )}


        {
          isExpanded && (
            <View style={{ width:'100%'}}>
              <Text style={{fontSize:14, fontFamily:'Outfit-Medium', color:'rgb(129, 129, 129)'}}>{exSecondaryText}</Text>
              </View>
          )

        }



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