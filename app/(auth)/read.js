import { View, Text } from 'react-native'
import React, { useCallback, useEffect, useRef } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { router, useFocusEffect } from 'expo-router'
import { Button } from 'react-native-paper'
import { agreementStore } from '../../src/stores/aggrementStore'
import { Image } from 'expo-image'
import MyColors from '../../src/constants/MyColors'



const Read = () => {
    const navigationRef = useRef(false)
    const readTerms = agreementStore(state => state.readTerms)
    const readPrivacy = agreementStore(state => state.readPrivacy)


    useFocusEffect(
        useCallback(()=> {
            navigationRef.current = false
        })
    )


  return (
    <SafeAreaView style={{flex:1, paddingTop:260}} >
        <Image source={require('../../assets/images/onboardBack.jpg')} style={{position:'absolute', top:0, left:0, right:0, bottom:0}} />

<View style={{width:'100%', justifyContent:'center', alignItems:'center', gap:18, paddingHorizontal:20,}}>

<Image source={require('../../assets/images/people.png')} style={{width:200, height:200}} />
<Text style={{fontFamily:'Outfit-Regular', fontSize:16, color:'black', textAlign:'center'}}>
    Once you confirmed, you can proceed to the next step
</Text>

</View>


<View style={{width:'100%', gap:12, paddingHorizontal:100, marginVertical:40}}>

</View>






        
        {/* <Button  
        mode='contained'
        style={{backgroundColor:readTerms ? 'black' : 'gray'}}
        onPress={()=> {
            if(navigationRef.current) return
            navigationRef.current = true
            router.push({pathname:'/textScreen', params:{id:'terms'}})
        }} 
            >
            Terms
        </Button>

        <Button 
        mode='contained'
        style={{backgroundColor:readPrivacy ? 'black' : 'gray'}}
        onPress={()=> {
            if(navigationRef.current) return
            navigationRef.current = true
            router.push({pathname:'/textScreen', params:{id:'privacy'}})
        }} 
            
        >
            Privacy
        </Button>

        <View style={{position:'absolute', bottom:40, width:'100%'}}>

            <Button 
            mode='contained'
            disabled={!(readPrivacy && readTerms)}
            onPress={()=> {
                if (navigationRef.current) return
                navigationRef.current = true
                router.push('/register')
            }}
            >
                Next
            </Button>

        </View> */}

    </SafeAreaView>
  )
}

export default Read