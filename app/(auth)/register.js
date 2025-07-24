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
    <LinearGradient colors={['rgb(255, 120, 120)','rgb(255, 154, 154)','rgb(255, 214, 247)', "rgb(255, 213, 142)",'rgb(252, 204, 120)']} start={{x:0, y:0}} end={{x:1, y:1}} style={{position:'absolute', top:0, left:0, right:0, bottom:0, opacity:0.8}} />

      <TransHeader />
      
    <EmailAuthComp />

    <GoogleAuthComp />
      
    </SafeAreaView>
      </TouchableWithoutFeedback>
  )
}

export default Register