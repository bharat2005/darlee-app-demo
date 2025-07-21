import { View, Text } from 'react-native'
import React from 'react'
import DateInputCard from '../Shared/DateInputCard'
import TextTipsData from '../../constants/TextTipsData'
import TipComp from '../Shared/TipComp'

const DOB = ({width, handleBlur, handleChange, handleReset, handleSubmit, touched, errors, values, setFieldValue}) => {
  return (
    <View style={{flex:1, width, paddingHorizontal:32, paddingTop:4}}>
      
      <View style={{width:'100%'}}>
      <Text style={{fontFamily:'Outfit-Medium', fontSize:17, color:'black', textAlign:'left',}}>{TextTipsData.age.text}</Text>
      </View>
   

    <TipComp text={TextTipsData.age.tip} />

      <DateInputCard primaryText={'Tell us your date of birth?'} isSecondaryText={false} value={values.dob} setFeildValue={(v)=> setFieldValue('dob', v)} />
    
    </View>
  )
}

export default DOB