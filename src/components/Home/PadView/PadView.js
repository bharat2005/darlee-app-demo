import { View, Text } from 'react-native'
import React from 'react'
import MyCutieFlower from './MyCutieFlower'
import CuteFlowerStand from './CuteFlowerStand'

const PadView = ({flowerAnimationStyle, isFutureToday, weekDays, selectedDate, handleSheet}) => {
  return (
    <View style={{width:'100%', flex:1}}>

        <MyCutieFlower flowerAnimationStyle={flowerAnimationStyle} />

        <CuteFlowerStand isFutureToday={isFutureToday} weekDays={weekDays} selectedDate={selectedDate} handleSheet={handleSheet} />
        
    </View>
  )
}

export default PadView