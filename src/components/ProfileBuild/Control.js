import { View, Text } from 'react-native'
import React from 'react'
import BigList from '../Shared/BigList'
import { control } from '../../constants/ProfileBuild/OptionArrays'

const Control = ({width, setFieldValue, handleNextPress, setCurrentIndex}) => {
  return (
    <View style={{flex:1, width, backgroundColor:'tomato'}}>

      <BigList array={control} setFieldValue={(v)=> setFieldValue('bodyControl',v)} handleNextPress={()=> { handleNextPress(); setCurrentIndex( prev => prev + 1)}} />
    
    </View>
  )
}

export default Control