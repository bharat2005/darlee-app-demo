import { format } from 'date-fns'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import MyFlowerMood from '../../src/components/Home/MyFlowerMood'
import MyWeekList from '../../src/components/Home/WeekCalander/MyWeekList'
import MainTopBar from '../../src/components/Shared/MainTopBar'

const Home = () => {
  const [selectedDate, setSelectedDate] = useState(format(new Date(), 'yyyy-MM-dd'))

  return (
    <SafeAreaView style={{flex:1}} edges={['top']}>

      <MainTopBar title='Home' type='home' />

      <MyFlowerMood />

      <MyWeekList seletedDate={selectedDate} setSelectedDate={setSelectedDate} />

    </SafeAreaView>
  )
}

export default Home