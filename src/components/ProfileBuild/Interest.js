import { View, Text } from 'react-native'
import React from 'react'
import BigList from '../Shared/BigList'
import { interests } from '../../constants/ProfileBuild/OptionArrays'

const Interest = ({width, setFieldValue, handleNextPress, setCurrentIndex}) => {
  return (
    <View style={{flex:1, width, backgroundColor:'blue'}}>

      <BigList array={interests} setFieldValue={(v)=> setFieldValue('healthInterest', v)} handleNextPress={()=> { handleNextPress(); setCurrentIndex(prev => prev + 1)}} />
    
    </View>
  )
}

export default Interest