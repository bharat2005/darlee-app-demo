import { View, Text } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useAuth } from '../../src/contexts/AuthContextProvider'

const Home = () => {
  const {logout} = useAuth()
  return (
    <SafeAreaView style={{flex:1}}>
      <Button onPress={logout} mode='outlined'>
        Logout
      </Button>
    </SafeAreaView>
  )
}

export default Home