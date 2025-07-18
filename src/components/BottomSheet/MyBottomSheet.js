import { View, Text, Dimensions, KeyboardAvoidingView, Platform, BackHandler } from 'react-native'
import React, { useEffect } from 'react'
import { BottomSheetModal, BottomSheetView } from '@gorhom/bottom-sheet'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import MySheetView from './MySheetView'

const MyBottomSheet = ({sheetRef, handlSheet}) => {
  const insets = useSafeAreaInsets()

  // useEffect(()=>{
  //   const onBackPress = () => {
  //     handlSheet('close')
      
  //   }

  //   BackHandler.addEventListener('hardwareBackPress', onBackPress)

  //   return () => {
  //     BackHandler.removeEventListener('hardwareBackPress', onBackPress)
  //   }
  // },[])


  return (
    
    <BottomSheetModal  enableContentPanningGesture={false} enableDismissOnClose={true} ref={sheetRef} snapPoints={['96%']}>
      <BottomSheetView style={{height:'100%', width:'100%', paddingBottom:insets.bottom + 40}}>
       
        <MySheetView handlSheet={handlSheet} /> 
    
      </BottomSheetView>
  </BottomSheetModal>
  )
}

export default MyBottomSheet