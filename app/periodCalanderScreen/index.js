import { View, Text, Modal } from 'react-native'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import MainTopBar from '../../src/components/Shared/MainTopBar'
import MyPeriodCalander from '../../src/components/PeriodCalander/MyPeriodCalander'
import MyPeriodCalanderButton from '../../src/components/PeriodCalander/MyPeriodCalanderButton'
import { usePeriods } from '../../src/hooks/usePeriods'
import { useMutatePeriod } from '../../src/hooks/useMutatePeriod'
import Toast from 'react-native-toast-message'
import { router, useFocusEffect } from 'expo-router'

const PeriodCalanderScreen = () => {
  const [isLoading, setIsLoading] = useState(false)
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

     <MyPeriodCalanderButton  periods={periods} setPeriods={setPeriods} mutatePeriods={mutatePeriods} setIsLoading={setIsLoading}/>

     
     <Modal visible={isLoading} backdropColor={1} animationType='fade'>
            <View style={{marginVertical:'auto', alignSelf:'center', width:320, height:320, backgroundColor:'white', borderRadius:12, padding:20}}>
             
            </View>
            
        </Modal>
    </SafeAreaView>
  )
}

export default PeriodCalanderScreen