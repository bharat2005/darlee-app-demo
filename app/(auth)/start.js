import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Button } from 'react-native-paper'
import { GoogleSignin } from '@react-native-google-signin/google-signin'
import { GoogleAuthProvider, signInWithCredential } from '@react-native-firebase/auth'
import {auth, db} from '../../src/services/firebase/firebaseConfig'


const Start = () => {




  return (
    <SafeAreaView style={{flex:1, justifyContent:'center', alignItems:'center'}}>

    

    </SafeAreaView>
  )
}

export default Start