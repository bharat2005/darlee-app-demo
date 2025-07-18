import React from 'react'
import { Text, View } from 'react-native'
import { CalendarList } from 'react-native-calendars'
import DayComponent from './DayComponent'
import { format } from 'date-fns'
import { useAllMarkedDates } from '../../hooks/useAllMarkedDates'


const MyCalendarList = ({handlSheet}) => {
  const {data: allMarkedDates} = useAllMarkedDates()

  const renderHeader = (date) => (
    <View style={{justifyContent:'center', alignItems:'center', paddingVertical:24}}>
      <Text style={{fontSize:16, fontWeight:'bold'}}>{format(date, "yyyy 'y' M 'month'")}</Text>
    </View>
  )



  return (
    <View style={{flex:1, width:'100%'}}>

      <CalendarList
      theme={{
        textSectionTitleColor: 'transparent',
      }}
      hideExtraDays={false}
      renderHeader={renderHeader}
      futureScrollRange={2}
      pastScrollRange={2}
      dayComponent={({date, marking, state})=> <DayComponent isMarked={allMarkedDates?.includes(date.dateString)} date={date} marking={marking} state={state} handlSheet={handlSheet} />}
      />

    </View>
  )
}

export default MyCalendarList