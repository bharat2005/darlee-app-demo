import { View, Text, TouchableWithoutFeedback, Keyboard } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import GoogleRegister from '../../src/components/Auth/Register/GoogleRegister'
import EmailRegister from '../../src/components/Auth/Register/EmailRegister'

const Register = () => {
  return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <SafeAreaView style={{flex:1, gap:28}}>
    <EmailRegister />

    <GoogleRegister />
      
    </SafeAreaView>
      </TouchableWithoutFeedback>
  )
}

export default Register