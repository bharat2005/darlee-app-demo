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

        <View style={{alignItems:'center', marginTop:24}}>
        <LottieView source={require('../../../assets/lottie/flowerAnimation.json')} autoPlay loop />
        </View>

      {/* <Button mode='contained' onPress={handleSubmit} disabled={isSubmitting} loading={isSubmitting} >
        Care me!
      </Button> */}

      </View>


    
    </View>
  )
}

export default End