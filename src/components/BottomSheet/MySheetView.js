import { View, Text } from 'react-native'
import React from 'react'
import MySheetViewHeader from './MySheetViewHeader'

const MySheetView = ({handlSheet}) => {
  return (
    <View style={{width:'100%', height:'100%'}}>
        <MySheetViewHeader handlSheet={handlSheet} />


    </View>
  )
}

export default MySheetView