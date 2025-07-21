import { View, Text, TouchableWithoutFeedback, Keyboard, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import GoogleAuthComp from '../../src/components/Auth/GoogleAuthComp'
import EmailAuthComp from '../../src/components/Auth/EmailAuthComp'
import TransHeader from '../../src/components/Shared/TransHeader'

const Login = () => {
  return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <SafeAreaView style={{flex:1, gap:28}}>
      <Image source={require('../../assets/images/onboardBack.jpg')} style={{width:100, height:100}} />
      <TransHeader />

    <EmailAuthComp origin={'login'} />

    <GoogleAuthComp />
      
    </SafeAreaView>
      </TouchableWithoutFeedback>
  )
}

export default Login