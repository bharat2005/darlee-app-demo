import { View, Text } from 'react-native'
import React from 'react'
import StandCircleView from './StandCircleView'

const CuteFlowerStand = () => {
  return (
    <View style={{width:'70%', height:'95%', borderTopLeftRadius:170, borderTopRightRadius:170, marginHorizontal:'auto', marginTop:'auto', backgroundColor:'white', alignItems:'center'}}>
      <StandCircleView />
    </View>
  )
}

export default CuteFlowerStand