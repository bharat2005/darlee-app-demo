import { View, Text } from 'react-native'
import React, { useCallback, useEffect, useRef } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { router, useFocusEffect } from 'expo-router'
import { Button } from 'react-native-paper'



const Read = () => {
    const navigationRef = useRef(false)

    useFocusEffect(
        useCallback(()=> {
            navigationRef.current = false
        })
    )


  return (
    <SafeAreaView style={{flex:1, justifyContent:'center', alignItems:'center'}} >
        
        <Button  
        onPress={()=> {
            if(navigationRef.current) return
            navigationRef.current = true
            router.push({pathname:'/textScreen', params:{id:'terms'}})
        }} 
            >
            Terms
        </Button>

        <Button 
        onPress={()=> {
            if(navigationRef.current) return
            navigationRef.current = true
            router.push({pathname:'/textScreen', params:{id:'privacy'}})
        }} 
            
        >
            Privacy
        </Button>

        <View style={{position:'absolute', bottom:40}}>

            <Button>
                Next
            </Button>

        </View>

    </SafeAreaView>
  )
}

export default Read