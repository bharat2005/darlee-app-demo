import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
const AuthLayout = () => {
  return (
<Stack screenOptions={{headerShown:false}} >
  <Stack.Screen name='start' />
    <Stack.Screen name='read' options={{animation: 'slide_from_right'}} />
      <Stack.Screen name='textScreen' />
            <Stack.Screen name='register' />
                   <Stack.Screen name='login' />
</Stack>
  )
}

export default AuthLayout