import { Image } from 'expo-image'
import { router, useFocusEffect } from 'expo-router'
import React, { useCallback, useRef } from 'react'
import { Text, View } from 'react-native'
import { Button } from 'react-native-paper'
import { SafeAreaView } from 'react-native-safe-area-context'
import Flower from '../../assets/svgs/Flower'
import MyColors from '../../src/constants/MyColors'
import MyVideoView from '../../src/components/Shared/MyVideoView'



const Start = () => {
  const navigationRef = useRef(false)

  useFocusEffect(useCallback(()=> {
    navigationRef.current = false
  }))




  return (
    <SafeAreaView style={{flex:1, paddingTop:120, backgroundColor:'white'}}>
      <MyVideoView />

<View style={{width:'100%', justifyContent:'center', alignItems:'center', marginBottom:28}}>

  <Flower height={60} widthP={60} color={'white'} />

</View>

<View style={{width:'100%', justifyContent:'center', alignItems:'center', paddingHorizontal:14, gap:18}}>
<Text style={{fontFamily:'Outfit-Regular', fontSize:18, color:'black', textAlign:'center'}}>
Built with love, not just logic
  </Text>
  <Text style={{fontFamily:'Outfit-Medium', fontSize:34, color:'black', textAlign:'center', paddingHorizontal:24}}>Made Soft for Your Stormy Days </Text>

</View>


<View style={{width:'100%', marginTop:220, paddingHorizontal:60, gap:16}}>

<Button mode='contained' 
onPress={()=> {
  if(navigationRef.current) return
  navigationRef.current = true
  router.push('/read')
}}
style={{backgroundColor:MyColors.DARK_GREY, height:44}}
contentStyle={{height:44}}
theme={{roundness:2}}
labelStyle={{fontFamily:'Outfit-Regular', fontSize:16, color:'white',}}
>
Start New
</Button>   

<Button mode='text' onPress={()=> {
  if(navigationRef.current) return
  navigationRef.current = true
  router.push('/login')
}}
style={{ height:44, borderWidth:0.5, borderColor:'black', backgroundColor:'white'}}
contentStyle={{height:44}}
theme={{roundness:2}}
labelStyle={{fontFamily:'Outfit-Regular', fontSize:16, color:'black',}}
>
Already have an account?
</Button>   
      </View>

    

    </SafeAreaView>
  )
}

export default Start