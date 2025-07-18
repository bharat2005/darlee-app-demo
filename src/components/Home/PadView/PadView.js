import { View, Text } from 'react-native'
import React from 'react'
import MyCutieFlower from './MyCutieFlower'
import CuteFlowerStand from './CuteFlowerStand'

const PadView = ({flowerAnimationStyle}) => {
  return (
    <View style={{width:'100%', flex:1}}>

        <MyCutieFlower flowerAnimationStyle={flowerAnimationStyle} />

        <CuteFlowerStand />
        
    </View>
  )
}

export default PadView