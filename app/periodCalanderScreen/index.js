import { View, Text, Modal, TouchableWithoutFeedback } from 'react-native'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import MainTopBar from '../../src/components/Shared/MainTopBar'
import MyPeriodCalander from '../../src/components/PeriodCalander/MyPeriodCalander'
import MyPeriodCalanderButton from '../../src/components/PeriodCalander/MyPeriodCalanderButton'
import { usePeriods } from '../../src/hooks/usePeriods'
import { useMutatePeriod } from '../../src/hooks/useMutatePeriod'
import Toast from 'react-native-toast-message'
import { router, useFocusEffect } from 'expo-router'
import ModalView from '../../src/components/Shared/ModalView'

const PeriodCalanderScreen = () => {
  const { data, error} = usePeriods()
  const [periods, setPeriods] = useState(data || [])
  const {mutate: mutatePeriods, error:errorMutate} = useMutatePeriod()
  

  useEffect(() => {
    if(data) setPeriods(data)
  },[data])







  return (
    <SafeAreaView style={{flex:1}} >
     
     <MainTopBar title='Period Calander' type='periodCalander' />

     <MyPeriodCalander periods={periods} setPeriods={setPeriods}/>

     <MyPeriodCalanderButton  periods={periods} setPeriods={setPeriods} mutatePeriods={mutatePeriods} />

     

    </SafeAreaView>
  )
}

export default PeriodCalanderScreen