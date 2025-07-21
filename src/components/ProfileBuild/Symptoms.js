import { View, Text } from 'react-native'
import React from 'react'
import SmallList from '../Shared/SmallList'
import { symptoms } from '../../constants/ProfileBuild/OptionArrays'
import TextTipsData from '../../constants/TextTipsData'
import TipComp from '../Shared/TipComp'

const Symptom = ({width, setFieldValue}) => {
  return (
    <View style={{flex:1, width, paddingHorizontal:32, paddingTop:4}}>
      
    <View style={{width:'100%'}}>
    <Text style={{fontFamily:'Outfit-Medium', fontSize:17, color:'black', textAlign:'left',}}>{TextTipsData.symptoms.text}</Text>
    </View>
 

  <TipComp text={TextTipsData.symptoms.tip} />

      <SmallList array={symptoms} setFieldValue={(v)=> setFieldValue('pmsSymptoms', v)} />
    
    </View>
  )
}

export default Symptom