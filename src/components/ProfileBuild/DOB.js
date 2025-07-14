import { View, Text } from 'react-native'
import React from 'react'
import DateInputCard from '../Shared/DateInputCard'

const DOB = ({width, handleBlur, handleChange, handleReset, handleSubmit, touched, errors, values, setFieldValue}) => {
  return (
    <View style={{flex:1, width, backgroundColor:'pink'}}>

      <DateInputCard primaryText={'DOB'} isSecondaryText={false} value={values.dob} setFeildValue={(v)=> setFieldValue('dob', v)} />
    
    </View>
  )
}

export default DOB