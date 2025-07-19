import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import MainTopBar from '../../src/components/Shared/MainTopBar'
import MyPeriodCalander from '../../src/components/PeriodCalander/MyPeriodCalander'
  import { usePeriods } from '../../src/hooks/usePeriods'
import MyPeriodCalanderButton from '../../src/components/PeriodCalander/MyPeriodCalanderButton'

const PeriodCalanderScreen = () => {
const {data} = usePeriods()

  return (
    <SafeAreaView style={{flex:1}} edges={['top']}>
     
     <MainTopBar title='Period Calander' type='periodCalander' />

     <MyPeriodCalander data={data} />

     <MyPeriodCalanderButton />

     
    </SafeAreaView>
  )
}

export default PeriodCalanderScreen