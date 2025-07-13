import { View, Text, Alert } from 'react-native'
import React, { createContext, Profiler, useContext, useEffect, useState } from 'react'
import { router } from 'expo-router'
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithCredential, signOut } from '@react-native-firebase/auth'
import { auth, db } from '../services/firebase/firebaseConfig'
import { GoogleSignin } from '@react-native-google-signin/google-signin'
import { doc, serverTimestamp, setDoc } from '@react-native-firebase/firestore'

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

      const docRef = doc(db, 'users', res?.user?.uid)
      await setDoc(docRef, {
        uid: res?.user?.uid,
        profilePic: res?.user?.photoURL,
        createdAt: serverTimestamp(),
        email: res?.user?.email,
        hasCompletedOnboarding: false
      })

      

    } catch(err){
      console.log("Error from googleLogin funtion",err.message)
      Alert.alert("Error",err.message )
    }
  }

  const emailRegister = async(email, password) => {
    try{
      const res = await createUserWithEmailAndPassword(auth, email, password)

      const docRef = doc(db, 'users', res?.user?.uid)
      await setDoc(docRef, {
        uid: res?.user?.uid,
        profilePic: '',
        createdAt: serverTimestamp(),
        email: res?.user?.email,
        hasCompletedOnboarding: false
      })

    } catch(err){
      console.log("Error from emailRegister",err.message)
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
<AuthContext.Provider value={{ googleLogin, logout, emailRegister }}>
    {children}
</AuthContext.Provider>
  )
}

export default AuthContextProvider

export const useAuth = () => useContext(AuthContext)