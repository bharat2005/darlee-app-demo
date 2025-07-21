import { View, Text } from 'react-native'
import React from 'react'
import BigList from '../Shared/BigList'
import { control } from '../../constants/ProfileBuild/OptionArrays'
import TextTipsData from '../../constants/TextTipsData'

const Control = ({width, setFieldValue, handleNextPress, setCurrentIndex}) => {
  return (
    <View style={{flex:1, width, paddingHorizontal:32, paddingTop:4}}>

    <View style={{width:'100%', marginTop:12, marginBottom:40}}>
        <Text style={{fontFamily:'Outfit-Light', fontSize:18, color:'black', textAlign:'left',}}>{TextTipsData.control.text}</Text>
        </View>

      <BigList array={control} setFieldValue={(v)=> setFieldValue('bodyControl',v)} handleNextPress={()=> { handleNextPress(); setCurrentIndex( prev => prev + 1)}} />
    
    </View>
  )
}

export default Control