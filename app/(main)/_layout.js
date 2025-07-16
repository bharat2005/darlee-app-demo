import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'

const MainLayout = () => {
  return (
<Tabs screenOptions={{headerShown:false}}>
<Tabs.Screen name='home' />
<Tabs.Screen name='chat' />
<Tabs.Screen name='love' />
<Tabs.Screen name='magzine' />
<Tabs.Screen name='calander' />
</Tabs>
  )
}

export default MainLayout