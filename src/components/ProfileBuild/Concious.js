import { View, Text } from 'react-native'
import React from 'react'
import BigList from '../Shared/BigList'
import { concious } from '../../constants/ProfileBuild/OptionArrays'
import TextTipsData from '../../constants/TextTipsData'

const Concious = ({width, setFieldValue, handleNextPress, setCurrentIndex}) => {
  return (
    <View style={{flex:1, width, paddingHorizontal:32, paddingTop:4}}>

<View style={{width:'100%', marginTop:12, marginBottom:40}}>
      <Text style={{fontFamily:'Outfit-Light', fontSize:18, color:'black', textAlign:'left',}}>{TextTipsData.conscious.text}</Text>
    </View>

      <BigList array={concious} setFieldValue={(v)=> setFieldValue('healthConcious', v)} handleNextPress={()=> { handleNextPress(); setCurrentIndex(prev => prev + 1)}} />
    
    </View>
  )
}

export default Concious