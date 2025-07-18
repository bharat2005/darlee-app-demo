import { View, Text } from 'react-native'
import React from 'react'
import { dateStore } from '../../stores/dateStore'

const MyBottomSheetDate = ({selectedDate}) => {


  return (
    <View style={{width:'100%', height:40, flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
      <Text style={{fontSize:16, fontWeight:'bold'}}>{selectedDate}</Text>
    </View>
  )
}

export default MyBottomSheetDate