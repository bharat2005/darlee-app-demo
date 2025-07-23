import { View, Text, Image } from 'react-native'
import React from 'react'
import MyColors from '../../constants/MyColors'

const MagCardDataView = ({localData, currentIndex, setCurrentIndex}) => {

    if(currentIndex === 0) {
        return (
            <View style={{height:'100%', width:'100%'}}>
                <Image  style={{height:'70%', width:'100%', backgroundColor:'red'}} />
                <Text  style={{fontSize:24, fontFamily:'Outfit-Bold', color:MyColors.DARK_GREY, textAlign:'center', marginTop:18}}>{localData[0]?.primaryText}</Text>
            </View>
        )
    }           

    if(currentIndex === localData.length - 1) {
        return (
            <View style={{height:'100%', width:'100%'}}>
                <Text>End</Text>
            </View>
        )
    }


  return (
    <View style={{height:'100%', width:'100%', flexDirection:'column-reverse'}}>
          <Image  style={{height:'85%', width:'100%', backgroundColor:'red'}} />
     <Text style={{fontSize:24, fontFamily:'Outfit-Bold', color:MyColors.DARK_GREY, textAlign:'center', marginTop:18}}>{localData[currentIndex]?.primaryText}</Text>
    <Text style={{fontSize:16, fontFamily:'Outfit-Regular', color:MyColors.DARK_GREY, textAlign:'center', marginTop:18}}>{localData[currentIndex]?.secondaryText}</Text>
  
    </View>
  )
}

export default MagCardDataView