import { View, Text, Alert } from 'react-native'
import React, { createContext, useContext, useEffect, useState } from 'react'
import { router } from 'expo-router'
import { GoogleAuthProvider, onAuthStateChanged, signInWithCredential, signOut } from '@react-native-firebase/auth'
import { auth } from '../services/firebase/firebaseConfig'
import { GoogleSignin } from '@react-native-google-signin/google-signin'

const AuthContext = createContext()

const AuthContextProvider = ({children}) => {
  const [user, setUser] = useState(null)


  useEffect(()=> {

    const unsub = onAuthStateChanged(auth, (u)=> {
      setUser(u)
      u ? router.replace('/home') : router.replace('/start')
    })

    return unsub

  },[])


    useEffect(()=> {

    GoogleSignin.configure({
      webClientId:'385011330673-raaukpvrdq57f5vs030jfggu4qt0miia.apps.googleusercontent.com'
    })

  },[])

  const googleLogin = async() => {
    try{
      await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog:true})
      const {data} = await GoogleSignin.signIn()

      const cred = await GoogleAuthProvider.credential(data?.idToken)
      const res = await signInWithCredential(auth, cred)

      

    } catch(err){
      console.log("Error from googleLogin funtion",err.message)
      Alert.alert("Error",err.message )
    }
  }


  const logout = async() => {
    try{
      await signOut(auth)

    } catch(err){
      console.log("Error from logout function", err.message)
      Alert.alert("Error", err.message)
    }
  }

  
  return (
<AuthContext.Provider value={{ googleLogin, logout }}>
    {children}
</AuthContext.Provider>
  )
}

export default AuthContextProvider

export const useAuth = () => useContext(AuthContext)