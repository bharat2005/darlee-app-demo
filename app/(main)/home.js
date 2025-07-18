import { format } from 'date-fns'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import MyFlowerMood from '../../src/components/Home/MyFlowerMood'
import MyWeekList from '../../src/components/Home/WeekCalander/MyWeekList'
import MainTopBar from '../../src/components/Shared/MainTopBar'
import PadView from '../../src/components/Home/PadView/PadView'
import { View } from 'react-native'
import { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'


const TOTAL_ANGLE = 72
const ANGLE_PER_ITEM = TOTAL_ANGLE / 6
const INITIAL_ANGLE = - TOTAL_ANGLE / 2

const Home = () => {
  const rotateValue = useSharedValue(0)
  const popDownValue = useSharedValue(0)
  const [selectedDate, setSelectedDate] = useState(format(new Date(), 'yyyy-MM-dd'))

  const handleDayPress = (dayIndex) =>{
    popDownValue.value = withTiming(80, {duration:400}, ()=>{
      rotateValue.value = withTiming(INITIAL_ANGLE + (dayIndex * ANGLE_PER_ITEM), {duration:50})
      popDownValue.value = withTiming(0, {duration:400})
    })
  }

  const flowerAnimationStyle = useAnimatedStyle(()=>{
    return {
      transform: [
        {rotate: `${rotateValue.value}deg`},
        {translateY: popDownValue.value}
      ]
    }
  })

  return (
    <SafeAreaView style={{flex:1, backgroundColor:'white'}} edges={['top']}>

      <View style={{flex:1, backgroundColor:'pink'}}>

      <MainTopBar title='Home' type='home' />

      

      <MyFlowerMood />

      <MyWeekList seletedDate={selectedDate} setSelectedDate={setSelectedDate} handleDayPress={handleDayPress} />

      <PadView flowerAnimationStyle={flowerAnimationStyle} />

      </View>

    </SafeAreaView>
  )
}

export default Home