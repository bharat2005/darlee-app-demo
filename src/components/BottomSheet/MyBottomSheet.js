import { View, Text, Dimensions } from 'react-native'
import React from 'react'
import { BottomSheetModal, BottomSheetView } from '@gorhom/bottom-sheet'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import MySheetView from './MySheetView'

const MyBottomSheet = ({ref, handlSheet}) => {

  return (
    
    <BottomSheetModal enableDismissOnClose ref={ref} snapPoints={['96%']}>
      <BottomSheetView style={{height:'100%', width:'100%'}}>
            <MySheetView handlSheet={handlSheet} /> 
      </BottomSheetView>
  </BottomSheetModal>
  )
}

export default MyBottomSheet