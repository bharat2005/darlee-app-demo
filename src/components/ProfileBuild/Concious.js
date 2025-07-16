import { View, Text } from 'react-native'
import React from 'react'
import BigList from '../Shared/BigList'
import { concious } from '../../constants/ProfileBuild/OptionArrays'

const Concious = ({width, setFieldValue, handleNextPress, setCurrentIndex}) => {
  return (
    <View style={{flex:1, width, backgroundColor:'purple'}}>

      <BigList array={concious} setFieldValue={(v)=> setFieldValue('healthConcious', v)} handleNextPress={()=> { handleNextPress(); setCurrentIndex(prev => prev + 1)}} />
    
    </View>
  )
}

export default Concious