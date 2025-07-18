import { View, Text, Dimensions, KeyboardAvoidingView, Platform } from 'react-native'
import React from 'react'
import { BottomSheetModal, BottomSheetView } from '@gorhom/bottom-sheet'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import MySheetView from './MySheetView'

const MyBottomSheet = ({ref, handlSheet}) => {
  const insets = useSafeAreaInsets()

  return (
    
    <BottomSheetModal enableContentPanningGesture={false} enableDismissOnClose ref={ref} snapPoints={['96%']}>
      <BottomSheetView style={{height:'100%', width:'100%', paddingBottom:insets.bottom + 40}}>
       
        <MySheetView handlSheet={handlSheet} /> 
    
      </BottomSheetView>
  </BottomSheetModal>
  )
}

export default MyBottomSheet