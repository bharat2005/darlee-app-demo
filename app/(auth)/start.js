import { Image } from 'expo-image'
import { router, useFocusEffect } from 'expo-router'
import React, { useCallback, useRef } from 'react'
import { Text, View } from 'react-native'
import { Button } from 'react-native-paper'
import { SafeAreaView } from 'react-native-safe-area-context'
import Flower from '../../assets/svgs/Flower'
import MyColors from '../../src/constants/MyColors'



const Start = () => {
  const navigationRef = useRef(false)

  useFocusEffect(useCallback(()=> {
    navigationRef.current = false
  }))




  return (
    <SafeAreaView style={{flex:1, paddingTop:140, backgroundColor:'white'}}>
      <Image source={require('../../assets/images/onboardBack.jpg')} style={{position:'absolute', top:0, left:0, right:0, bottom:0, opacity:0.6}} />

<View style={{width:'100%', justifyContent:'center', alignItems:'center', marginBottom:28}}>

  <Flower height={60} widthP={60} color={MyColors.PRIMARY} />

</View>

<View style={{width:'100%', justifyContent:'center', alignItems:'center', paddingHorizontal:18, gap:24}}>
<Text style={{fontFamily:'KaiseiDecol-Regular', fontSize:18, color:'black', textAlign:'center'}}>
Built with love, not just logic
  </Text>
  <Text style={{fontFamily:'KaiseiDecol-Bold', fontSize:30, color:'black', textAlign:'center'}}>Made Soft for Your Stormy Days </Text>

</View>


<View style={{width:'100%', marginTop:180, paddingHorizontal:60, gap:16}}>

<Button mode='contained' onPress={()=> {
  if(navigationRef.current) return
  navigationRef.current = true
  router.push('/read')
}}
style={{backgroundColor:MyColors.DARK_GREY, height:44}}
contentStyle={{height:44}}
theme={{roundness:2}}
labelStyle={{fontFamily:'Outfit-Regular', fontSize:16, color:'white'}}
>
  Start New
</Button>   

<Button mode='text' onPress={()=> {
  if(navigationRef.current) return
  navigationRef.current = true
  router.push('/login')
}}
style={{backgroundColor:'transparent', height:44}}
contentStyle={{height:44}}
theme={{roundness:2}}
labelStyle={{fontFamily:'Outfit-Regular', fontSize:16, color:'black'}}
>
  Click if you already have an account
</Button>   
      </View>

    

    </SafeAreaView>
  )
}

export default Start