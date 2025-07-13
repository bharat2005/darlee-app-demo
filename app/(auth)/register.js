import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import GoogleRegister from '../../src/components/Auth/Register/GoogleRegister'

const Register = () => {
  return (
    <SafeAreaView style={{flex:1, justifyContent:'space-around', alignItems:'center'}}>


      



    

    <GoogleRegister />
      
    </SafeAreaView>
  )
}

export default Register