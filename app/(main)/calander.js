import { View, Text } from 'react-native'
import React, { useRef, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Button } from 'react-native-paper'
import MyBottomSheet from '../../src/components/BottomSheet/MyBottomSheet'

const Calander = () => {
  const sheetRef = useRef(null)

  const handlSheet = (action) => {
    if(sheetRef.current) {
      action === 'open' ? sheetRef.current.present() : sheetRef.current.dismiss()
    }
  }

  return (
    <SafeAreaView edges={['top']} style={{flex:1}}>
        
        <View style={{flex:1, justifyContent:'center', alignItems:'center', height:100}}>
          <Button onPress={()=> handlSheet('open')}>
            OpenSheet
          </Button>

          <MyBottomSheet ref={sheetRef} handlSheet={handlSheet} />
        </View>
        
    </SafeAreaView>
  )
}

export default Calander