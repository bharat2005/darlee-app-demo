import React from 'react'
import { Text, View } from 'react-native'
import { CalendarList } from 'react-native-calendars'
import DayComponent from './DayComponent'

const MyCalendarList = () => {

  const renderHeader = () => (
    <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center', paddingHorizontal:16, paddingVertical:12}}>
      <Text style={{fontSize:16, fontWeight:'bold'}}>My Baby Girl</Text>
    </View>
  )
  return (
    <View style={{flex:1, width:'100%'}}>
      <CalendarList
      futureScrollRange={2}
      renderHeader={renderHeader}
      pastScrollRange={2}
      hideExtraDays={false}
     dayComponent={({state, marking, date})=> <DayComponent state={state} marking={marking} date={date} />}
     theme={{
      textSectionTitleColor: 'transparent',
     }}
      />
    </View>
  )
}

export default MyCalendarList