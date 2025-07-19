import { BottomSheetModal, BottomSheetView } from '@gorhom/bottom-sheet'
import React, { useCallback, useEffect, useState } from 'react'
import { BackHandler } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import MySheetView from './MySheetView'

const MyBottomSheet = ({sheetRef, handlSheet, weekDays}) => {
  const insets = useSafeAreaInsets()
  const [isSheetOpen, setIsSheetOpen] = useState(false)

  const handleBackPress = useCallback(()=> {
    handlSheet('close')
    return true
  },[handlSheet])


  useEffect(()=>{
    let backhandler;
    if(isSheetOpen){
      backhandler = BackHandler.addEventListener('hardwareBackPress', handleBackPress)
    }

    return ()=> {
      if(backhandler) backhandler.remove()
    }
},[isSheetOpen, handleBackPress])

  const handleChange = (index)=> {
    setIsSheetOpen(index >= 0)
  }

  return (
    
    <BottomSheetModal onChange={handleChange} enableContentPanningGesture={false} enableDismissOnClose={true} ref={sheetRef} snapPoints={['96%']}>
      <BottomSheetView style={{height:'100%', width:'100%', paddingBottom:insets.bottom + 40}}>
       
        <MySheetView handlSheet={handlSheet} weekDays={weekDays} /> 
    
      </BottomSheetView>
  </BottomSheetModal>
  )
}

export default MyBottomSheet