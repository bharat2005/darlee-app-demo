import { View, Text } from 'react-native'
import React from 'react'
import SmallList from '../Shared/SmallList'
import { symptoms } from '../../constants/ProfileBuild/OptionArrays'

const Symptom = ({width, setFieldValue}) => {
  return (
    <View style={{flex:1, width, backgroundColor:'cyan'}}>

      <SmallList array={symptoms} setFieldValue={(v)=> setFieldValue('pmsSymptoms', v)} />
    
    </View>
  )
}

export default Symptom