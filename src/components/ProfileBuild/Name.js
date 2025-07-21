import { View, Text } from 'react-native'
import React from 'react'
import TextInputCard from '../Shared/TextInputCard'
import TextTipsData from '../../constants/TextTipsData'
import TipComp from '../Shared/TipComp'


const Name = ({width, handleBlur, handleChange, handleReset, handleSubmit, touched, errors, values, setFieldValue}) => {
  return (
    <View style={{flex:1, width, paddingHorizontal:32, paddingTop:4}}>
      
      <View style={{width:'100%'}}>
      <Text style={{fontFamily:'Outfit-Medium', fontSize:17, color:'black', textAlign:'left',}}>{TextTipsData.name.text}</Text>
      </View>
   

    <TipComp text={TextTipsData.name.tip} />


    <TextInputCard placeholder='Enter Nickname' value={values?.name} onChangeText={handleChange('name')} isSecondaryText={false} primaryText={'What should we call you?'}/>
    
    </View>
  )
}

export default Name