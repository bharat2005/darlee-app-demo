import { View, Text, Image } from 'react-native'
import React from 'react'
import Images  from '../../constants/Images'
import MyColors from '../../constants/MyColors'

const change = {
    'normal': 'normal',
    'perfect': 'perfect',
    'fair': 'fair',
    'notGood': 'not good',
  'happy': 'happy',
  'exicted': 'exicted',
  'fine': 'fine',
  'neat': 'neat',
  'irritation': 'irritation',
  'calm': 'calm',
  'unstable': 'unstable',
  'yutu': 'yuutsu',
  'anxity': 'anxity',
  'poor': 'poor',
  'ordinary': 'ordinary',
  'noComplaints': 'no complaints',
  'backPain': 'back pain',
  'ovulationPain': 'ovulation pain',
  'skin': 'rough skin',
  'stomachAche': 'stomach ache',
  'tired': 'tired',
  'fatigue': 'fatigue',  
  'appIncrease': 'appetite increase',
  'cold': 'cold',
  'chest': 'chest swelling',
  'chestswelling': 'chest swelling',
  'nausea': 'nausea',
  'dizziness': 'dizziness',
  'constipate': 'constipate',
  'diarrhea': 'diarrhea',
  'expressDelivery': 'express',
  'swelling': 'swelling',
  'sleepiness': 'sleepiness',

}


const IconsPreview = ({array}) => {

  if(array.length === 0) {
    return (
      <View style={{width:'100%', flexDirection:'row', gap:4, justifyContent:'center', alignItems:'center', flexWrap:'wrap'}}>
        <Text style={{fontSize:13, fontFamily:'Outfit-Medium', color:MyColors.DARK_BLUE}} >No records to predict!</Text>
      </View>
    )
  }
  return (
    <View style={{width:'100%', flexDirection:'row', gap:4, justifyContent:'center', alignItems:'center', flexWrap:'wrap'}}>
      {
        array.map((item, index)=> (
            <View key={index} style={{width:44, height:44, borderRadius:12, marginBottom:4}}>
                <Image source={Images[item]} style={{width:44, height:44, borderRadius:12, resizeMode:'cover'}} />
                <Text style={{fontSize:11, fontFamily:'Outfit-Medium', textAlign:'center'}}>{change[item]}</Text>
            </View>
        ))
      }
    </View>
  )
}

export default IconsPreview