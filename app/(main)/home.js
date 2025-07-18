import { format } from 'date-fns'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import MyFlowerMood from '../../src/components/Home/MyFlowerMood'
import MyWeekList from '../../src/components/Home/WeekCalander/MyWeekList'
import MainTopBar from '../../src/components/Shared/MainTopBar'
import PadView from '../../src/components/Home/PadView/PadView'
import { View } from 'react-native'

const Home = () => {
  const [selectedDate, setSelectedDate] = useState(format(new Date(), 'yyyy-MM-dd'))

  return (
    <SafeAreaView style={{flex:1, backgroundColor:'white'}} edges={['top']}>

      <View style={{flex:1, backgroundColor:'pink'}}>

      <MainTopBar title='Home' type='home' />

      

      <MyFlowerMood />

      <MyWeekList seletedDate={selectedDate} setSelectedDate={setSelectedDate} />


      <PadView />
      </View>

    </SafeAreaView>
  )
}

export default Home