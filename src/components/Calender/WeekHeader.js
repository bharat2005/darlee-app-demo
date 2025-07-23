import { View, Text } from 'react-native'
import React from 'react'

const WeekHeader = () => {
  return (
    <View style={{width:'100%', height:30, flexDirection:'row', justifyContent:'space-between', alignItems:'center', paddingHorizontal:26}}>
      <Text style={{fontSize:14, fontFamily:'Outfit-Light', color:'red'}}>Sun</Text>
      <Text style={{fontSize:14, fontFamily:'Outfit-Light'}}>Mon</Text>
      <Text style={{fontSize:14, fontFamily:'Outfit-Light'}}>Tue</Text>
      <Text style={{fontSize:14, fontFamily:'Outfit-Light'}}>Wed</Text>
      <Text style={{fontSize:14, fontFamily:'Outfit-Light'}}>Thu</Text>
      <Text style={{fontSize:14, fontFamily:'Outfit-Light'}}>Fri</Text>
      <Text style={{fontSize:14, fontFamily:'Outfit-Light'}}>Sat</Text>
    </View>
  )
}

export default WeekHeader