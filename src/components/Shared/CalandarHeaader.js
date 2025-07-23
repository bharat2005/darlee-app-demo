import { View, Text } from 'react-native'
import React from 'react'
import { format } from 'date-fns'

const CalandarHeaader = ({date}) => {
  return (
    <View style={{justifyContent:'center', alignItems:'center', paddingVertical:24,}}>
      <Text style={{fontSize:20, fontFamily:'Outfit-Medium'}}>{format(date, "yyyy 'y' M 'month'")}</Text>
    </View>
  )
}

export default CalandarHeaader