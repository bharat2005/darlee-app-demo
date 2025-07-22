import { View, Text, Image } from 'react-native'
import React from 'react'
import Images  from '../../constants/Images'




const IconsPreview = ({array}) => {

  if(array.length === 0) {
    return (
      <View style={{width:'100%', flexDirection:'row', gap:4, justifyContent:'center', alignItems:'center', flexWrap:'wrap'}}>
        <Text>No predictions</Text>
      </View>
    )
  }
  return (
    <View style={{width:'100%', flexDirection:'row', gap:4, justifyContent:'center', alignItems:'center', flexWrap:'wrap'}}>
      {
        array.map((item, index)=> (
            <View key={index} style={{width:44, height:44, borderRadius:12, marginBottom:4}}>
                <Image source={Images[item]} style={{width:44, height:44, borderRadius:12, resizeMode:'cover'}} />
                <Text style={{fontSize:12, fontFamily:'Outfit-Medium', textAlign:'center'}}>{item}</Text>
            </View>
        ))
      }
    </View>
  )
}

export default IconsPreview