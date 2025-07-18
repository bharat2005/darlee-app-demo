import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { Button } from 'react-native-paper'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useAuth } from '../../src/contexts/AuthContextProvider'
import MainTopBar from '../../src/components/Shared/MainTopBar'
import MyFlowerMood from '../../src/components/Home/MyFlowerMood'
import MyWeekList from '../../src/components/Home/MyWeekList'
import { addDays, format } from 'date-fns'

const Home = () => {
  const [selectedDate, setSelectedDate] = useState(format(new Date(), 'yyyy-MM-dd'))

  return (
    <SafeAreaView style={{flex:1}} edges={['top']}>

      <MainTopBar title='Home' type='home' />

      <MyFlowerMood />

      <MyWeekList seletedDate={selectedDate} />

    </SafeAreaView>
  )
}

export default Home