import { View, Text, Pressable, TouchableOpacity } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { Feather, FontAwesome5, Ionicons, Octicons } from '@expo/vector-icons'
import MyColors from '../../src/constants/MyColors'
import LoveLogo from '../../assets/svgs/LoveLogo'
import { LinearGradient } from 'expo-linear-gradient'

const MainLayout = () => {
  return (
<Tabs 
screenOptions={{
  headerShown:false, 
  tabBarActiveTintColor:MyColors.DARK_BLUE,
   }}
   >


<Tabs.Screen name='home' 
options={{tabBarIcon:({focused, color})=> <Octicons name="home" size={22} color={color} />,
tabBarLabel:'Home',
tabBarLabelStyle:{fontSize:10, fontFamily:'Outfit-Light'}
}} />


  <Tabs.Screen name='chat' 
  options={{tabBarIcon:({focused, color})=> <Ionicons name="chatbubble-ellipses-outline" size={24} color={color} />,
tabBarLabel:'Chat',
tabBarLabelStyle:{fontSize:10, fontFamily:'Outfit-Light'}
}} />


<Tabs.Screen name='love' 
options={{
   tabBarIcon:({color, size})=> (
  <View style={{height:60, width:60,  position:'absolute', bottom:4 }}>
    <LinearGradient colors={['rgb(255, 180, 180)', 'rgb(255, 215, 147)']} start={{x:0, y:0}} end={{x:1, y:1}} style={{height:'100%', width:'100%', borderRadius:30,}}>
       <LoveLogo color={'rgb(45, 51, 88)'} />
    </LinearGradient>
    </View>),
    tabBarLabel:'Love',
    tabBarLabelStyle:{fontSize:10, fontFamily:'Outfit-Light'}
  
  }} />




<Tabs.Screen name='magzine' 
options={{
  tabBarIcon:({focused, color})=><Feather name="book-open" size={22} color={color} />,
  tabBarLabel:'Magzine',
  tabBarLabelStyle:{fontSize:10, fontFamily:'Outfit-Light'}
  }} />
  
  
  
  
  <Tabs.Screen name='calander' 
  options={{
    tabBarIcon:({focused, color})=> <FontAwesome5 name="calendar-alt" size={22} color={color} />,
  tabBarLabel:'Calander',
  tabBarLabelStyle:{fontSize:10, fontFamily:'Outfit-Light'}
  }} />
</Tabs>
  )
}

export default MainLayout