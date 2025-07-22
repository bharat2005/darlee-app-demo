import { View, Text } from 'react-native'
import React from 'react'
import Flower from '../../../assets/svgs/Flower'
import { Button } from 'react-native-paper'
import MyColors from '../../constants/MyColors'
import LottieView from 'lottie-react-native';

const End = ({width, handleSubmit, isSubmitting}) => {
  return (
    <View style={{flex:1, width, paddingHorizontal:50, justifyContent:'center', alignItems:'center'}}>



      <View style={{width:'100%', paddingHorizontal:32, backgroundColor:'white', borderRadius:18, paddingVertical:30}}>

        <Text style={{fontFamily:'Outfit-Medium', fontSize:24, color:'black', textAlign:'center'}}>Sweet, you are all set!</Text>

      
        <LottieView style={{alignSelf:'center', marginVertical:22, height:120, width:120}} source={require('../../../assets/lottie/flowerAnimation.json')} autoPlay loop />
    
        <Text style={{fontFamily:'Outfit-Light', fontSize:16, color:'gray', textAlign:'center'}}>From little cramps to cloudy days, every part matters</Text>


        <Button mode='contained'
        labelStyle={{fontFamily:'Outfit-Medium', fontSize:16, color:'white'}}
        style={{backgroundColor:isSubmitting ? 'lightgrey' : MyColors.DARK_GREY, height:44, marginTop:24}}
        contentStyle={{height:44}}
        theme={{roundness:2}} 
         onPress={handleSubmit} 
         disabled={isSubmitting} 
         loading={isSubmitting} 
         >
         Let’s Begin
        </Button>

      </View>


    
    </View>
  )
}

export default End