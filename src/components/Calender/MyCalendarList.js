import React from 'react'
import { Text, View } from 'react-native'
import { CalendarList } from 'react-native-calendars'
import DayComponent from './DayComponent'
import { format, parseISO } from 'date-fns'
import { useAllMarkedDates } from '../../hooks/useAllMarkedDates'
import CalandarHeaader from '../Shared/CalandarHeaader'


const MyCalendarList = ({handlSheet}) => {
  const {data: allMarkedDates} = useAllMarkedDates()





  return (
    <View style={{flex:1, width:'100%'}}>

      <CalendarList
      theme={{
        textSectionTitleColor: 'transparent',
      }}
      hideExtraDays={false}
      renderHeader={(date)=> <CalandarHeaader date={date} />}
      dayComponent={({date, marking, state})=> <DayComponent isMarked={allMarkedDates?.includes(date.dateString)} isFutureToday={format(new Date(), 'yyyy-MM-dd') <= date.dateString} date={date} marking={marking} state={state} handlSheet={handlSheet} />}
      />

    </View>
  )
}

export default MyCalendarList