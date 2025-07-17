import { View, Text } from 'react-native'
import React from 'react'
import MySheetViewHeader from './MySheetViewHeader'
import MyBottomSheetDate from './MyBottomSheetDate'
import MyFormikView from './Formik/MyFormikView'

const MySheetView = ({handlSheet}) => {
  return (
    <View style={{width:'100%', height:'100%'}}>
        <MySheetViewHeader handlSheet={handlSheet} />

        <MyBottomSheetDate /> 

        <MyFormikView />


    </View>
  )
}

export default MySheetView