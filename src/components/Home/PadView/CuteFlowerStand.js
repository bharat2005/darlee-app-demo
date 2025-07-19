import { View, Text } from 'react-native'
import React from 'react'
import StandCircleView from './StandCircleView'
import StandRecordView from './StandRecordView'

const CuteFlowerStand = ({isFutureToday, weekDays, selectedDate}) => {
  return (
    <View style={{width:'70%', height:'95%', borderTopLeftRadius:170, borderTopRightRadius:170, marginHorizontal:'auto', marginTop:'auto', backgroundColor:'white', alignItems:'center'}}>
      <StandCircleView />

{
  isFutureToday ?
  (
<></>
  ) : (
    <StandRecordView weekDays={weekDays} selectedDate={selectedDate} />
  )
}
     
      
    </View>
  )
}

export default CuteFlowerStand