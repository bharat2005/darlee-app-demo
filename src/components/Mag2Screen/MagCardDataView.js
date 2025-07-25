import { View, Text, Image } from 'react-native'
import React from 'react'
import MyColors from '../../constants/MyColors'
import Flowers from '../../../assets/svgs/Flower'
 
const MagCardDataView = ({currentIndex, setCurrentIndex, cardId, type, starredCardIds, fuckData}) => {

    if(currentIndex === 0) {
        return (
            <View style={{height:'100%', width:'100%'}}>
                <Image source={fuckData?.stepsData[currentIndex]?.boxImage} style={{height:'50%', width:'100%'}} />
                <Text  style={{fontSize:36, fontFamily:'Outfit-Light', color:MyColors.DARK_GREY, textAlign:'left', marginTop:18, paddingHorizontal:12, lineHeight:50}}>{fuckData?.stepsData[0]?.primaryText}</Text>

                <View style={{marginTop:'auto', height:120, width:'85%',marginBottom:18, marginHorizontal:'auto', flexDirection:'column', borderTopWidth:1.2, borderTopColor:MyColors.DARK_GREY, justifyContent:'center', alignItems:'center'}}>

                <Text style={{fontSize:15, fontFamily:'Outfit-Light', color:'rgb(0, 0, 0)', textAlign:'center', marginTop:12}}>Made with heart ❤️</Text>
                <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center', gap:8, marginTop:12}}>
                <Flowers width={28} height={28} />
                <Flowers width={28} height={28} />  
                <Flowers width={28} height={28} />
                </View>
                </View>
            </View>
        )
    }           

    if(currentIndex === fuckData?.stepsData?.length - 1) {
        return (
            <View style={{height:'100%', width:'100%', justifyContent:'center', alignItems:'center', gap:18, paddingBottom:34}}>
               <Image source={fuckData?.stepsData[currentIndex]?.boxImage} style={{height:'50%', width:'100%'}} />
               <Text style={{fontSize:30, fontFamily:'Outfit-Bold', color:MyColors.DARK_GREY, textAlign:'center', marginTop:18, paddingHorizontal:12, lineHeight:44}}>{fuckData?.stepsData[currentIndex]?.primaryText}</Text>
            <Text style={{fontSize:16, fontFamily:'Outfit-Regular', color:MyColors.DARK_GREY, textAlign:'center', paddingHorizontal:12, lineHeight:24}}>{fuckData?.stepsData[currentIndex]?.secondaryText}</Text>

            
            <View style={{marginTop:'auto', height:120, width:'85%',marginBottom:18, marginHorizontal:'auto', flexDirection:'column', borderTopWidth:1.2, borderTopColor:MyColors.DARK_GREY, justifyContent:'center', alignItems:'center'}}>

<Text style={{fontSize:15, fontFamily:'Outfit-Light', color:'rgb(0, 0, 0)', textAlign:'center', marginTop:12}}>Made with heart ❤️</Text>
<View style={{flexDirection:'row', justifyContent:'center', alignItems:'center', gap:8, marginTop:12}}>
<Flowers width={28} height={28} />
<Flowers width={28} height={28} />  
<Flowers width={28} height={28} />
</View>
</View>
            </View>
        )
    }



  return (
    <View style={{height:'100%', width:'100%', flexDirection:'column-reverse', gap:38, paddingBottom:34}}>
          <Image source={fuckData?.stepsData[currentIndex]?.boxImage} style={{height:'60%', width:'100%'}} />
          <Text style={{fontSize:16, fontFamily:'Outfit-Regular', color:MyColors.DARK_GREY, textAlign:'left', paddingHorizontal:12, lineHeight:24}}>{fuckData?.stepsData[currentIndex]?.secondaryText}</Text>
        <Text style={{fontSize:24, fontFamily:'Outfit-Bold', color:MyColors.DARK_GREY, textAlign:'left', paddingHorizontal:12, lineHeight:32}}>{fuckData?.stepsData[currentIndex]?.primaryText}</Text>

  
    </View>
  )
}

export default MagCardDataView