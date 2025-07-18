import React from 'react'
import { Text, View } from 'react-native'

const DayComponent = ({state, marking, date}) => {
  return (
    <View style={{height:80, width:'100%', justifyContent:'center', alignItems:'center', borderBottomWidth:1, borderBottomColor:'#ccc'}}>
      <Text style={{fontSize:16, fontWeight:'bold'}}>{date?.day}</Text>
    </View>
  )
}

export default DayComponent