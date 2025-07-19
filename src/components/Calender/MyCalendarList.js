import React from 'react'
import { Text, View } from 'react-native'
import { CalendarList } from 'react-native-calendars'
import DayComponent from './DayComponent'
import { eachDayOfInterval, format, parseISO } from 'date-fns'
import { useAllMarkedDates } from '../../hooks/useAllMarkedDates'
import CalandarHeaader from '../Shared/CalandarHeaader'
import { usePeriods } from '../../hooks/usePeriods'


const MyCalendarList = ({handlSheet}) => {
  const {data: allMarkedDates} = useAllMarkedDates()
  const {data: periods} = usePeriods()

  const getMarkedDates = () => {
    const markedObj = {}
    const colorTypes = {
      period: 'red',
      follicular:'blue',
      ovulation:'cyan',
      luteal:'gray'
    }
    periods?.forEach((item, index) => {
      const range = eachDayOfInterval({start: parseISO(item.start), end: parseISO(item.end)}).map(date => format(date, 'yyyy-MM-dd'))
      range.forEach(dateString => {
        markedObj[dateString] = {phaseColor: colorTypes[item.phase]}
      })
    })
    return markedObj
  }

console.log(getMarkedDates())



  return (
    <View style={{flex:1, width:'100%'}}>

      <CalendarList
      markedDates={getMarkedDates()}
      theme={{
        textSectionTitleColor: 'transparent',
      }}
      hideExtraDays={false}
      renderHeader={(date)=> <CalandarHeaader date={date} />}
      dayComponent={({date, marking, state})=> <DayComponent phaseColor={marking?.phaseColor} isMarked={allMarkedDates?.includes(date.dateString)} isFutureToday={format(new Date(), 'yyyy-MM-dd') <= date.dateString} date={date} marking={marking} state={state} handlSheet={handlSheet} />}
      />

    </View>
  )
}

export default MyCalendarList