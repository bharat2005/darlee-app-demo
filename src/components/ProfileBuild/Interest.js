import { View, Text } from 'react-native'
import React from 'react'
import BigList from '../Shared/BigList'
import { interests } from '../../constants/ProfileBuild/OptionArrays'
import TextTipsData from '../../constants/TextTipsData'

const Interest = ({width, setFieldValue, handleNextPress, setCurrentIndex}) => {
  return (
    <View style={{flex:1, width, paddingHorizontal:32, paddingTop:4}}>

<View style={{width:'100%', marginTop:12, marginBottom:40}}>
    <Text style={{fontFamily:'Outfit-Light', fontSize:18, color:'black', textAlign:'left',}}>{TextTipsData.interest.text}</Text>
    </View>
 

      <BigList array={interests} setFieldValue={(v)=> setFieldValue('healthInterest', v)} handleNextPress={()=> { handleNextPress(); setCurrentIndex(prev => prev + 1)}} />
    
    </View>
  )
}

export default Interest