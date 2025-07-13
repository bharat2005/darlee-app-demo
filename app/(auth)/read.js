import { View, Text } from 'react-native'
import React, { useCallback, useEffect, useRef } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { router, useFocusEffect } from 'expo-router'
import { Button } from 'react-native-paper'
import { agreementStore } from '../../src/stores/aggrementStore'



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
    <SafeAreaView style={{flex:1, justifyContent:'center', alignItems:'center'}} >
        
        <Button  
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

        </View>

    </SafeAreaView>
  )
}

export default Read