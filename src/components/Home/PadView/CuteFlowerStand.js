import { View, Text } from 'react-native'
import React from 'react'
import StandCircleView from './StandCircleView'
import StandRecordView from './StandRecordView'
import FutureRecordView from './FutureRecordView'

const CuteFlowerStand = ({isFutureToday, weekDays, selectedDate, handleSheet}) => {
  return (
    <View style={{width:'70%', height:'95%', borderTopLeftRadius:170, borderTopRightRadius:170, marginHorizontal:'auto', marginTop:'auto', backgroundColor:'white', alignItems:'center'}}>
      <StandCircleView />

{
  isFutureToday ?
  (
<FutureRecordView  />
  ) : (
  <StandRecordView weekDays={weekDays} selectedDate={selectedDate} handleSheet={handleSheet} />
  )
}
     
      
    </View>
  )
}

export default CuteFlowerStand