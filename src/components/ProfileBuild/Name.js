import { View, Text } from 'react-native'
import React from 'react'
import TextInputCard from '../Shared/TextInputCard'

const Name = ({width, handleBlur, handleChange, handleReset, handleSubmit, touched, errors, values, setFieldValue}) => {
  return (
    <View style={{flex:1, width}}>

      <TextInputCard value={values?.name} onChangeText={handleChange('name')} isSecondaryText={false} primaryText={'Name'}/>
    
    </View>
  )
}

export default Name