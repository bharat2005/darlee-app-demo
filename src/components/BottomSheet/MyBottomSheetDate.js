import { View, Text } from 'react-native'
import React from 'react'
import { dateStore } from '../../stores/dateStore'
import { format, parseISO } from 'date-fns'

const MyBottomSheetDate = ({selectedDate}) => {


  return (
    <View style={{width:'100%', height:40, flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
      <Text style={{fontSize:20, fontFamily:'Outfit-Bold'}}>{format(parseISO(selectedDate), 'yyyy.M.dd')}</Text>
    </View>
  )
}

export default MyBottomSheetDate