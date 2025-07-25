import { View, Text, TouchableWithoutFeedback, Keyboard, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import GoogleAuthComp from '../../src/components/Auth/GoogleAuthComp'
import EmailAuthComp from '../../src/components/Auth/EmailAuthComp'
import TransHeader from '../../src/components/Shared/TransHeader'
import { LinearGradient } from 'expo-linear-gradient'


const Register = () => {
  return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <SafeAreaView style={{flex:1, gap:28}}>
    <Image source={require('../../assets/images/onboardBack.jpg')} style={{position:'absolute', top:0, left:0, right:0, bottom:0, opacity:0.6}} />

      <TransHeader />
      
    <EmailAuthComp />

    <GoogleAuthComp />
      
    </SafeAreaView>
      </TouchableWithoutFeedback>
  )
}

export default Register