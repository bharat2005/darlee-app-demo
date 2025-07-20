import React, { useEffect } from 'react'
import { CalendarProvider, WeekCalendar } from 'react-native-calendars'
import WeekNextButtons from './WeekNextButtons'
import { View } from 'react-native'
import { Gesture, GestureDetector } from 'react-native-gesture-handler'
import { eachDayOfInterval, format, getDay, getISODay, parseISO } from 'date-fns'
import { usePeriods } from '../../../hooks/usePeriods'
import WeekDay from './WeekDay'

const getIndex = (date) =>{
  const jsDay = getDay(parseISO(date))
  return ( jsDay + 6 ) % 7
}

const MyWeekList = ({seletedDate, setSelectedDate, handleDayPress}) => {
  const {data: periods} = usePeriods()


  useEffect(()=>{
    handleDayPress(getIndex(seletedDate))
  },[seletedDate])


  const getMarkedDates = () => {
    const markedObj = {}
    const colorTypes = {
      period: 'tomato',
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



  return (
<View style={{}}>
<GestureDetector gesture={Gesture.Pan().onStart((e)=>{})}>
<View style={{width:'100%', height:85}}>
<CalendarProvider date={seletedDate} >

    <WeekCalendar 
    markedDates={getMarkedDates()}
    firstDay={1}
    theme={{
        calendarBackground: 'transparent',
        textSectionTitleColor: 'black',
    }}
    dayComponent={({date, marking, state})=> <WeekDay seletedDate={seletedDate} onPress={()=> setSelectedDate(date.dateString)} date={date} marking={marking} state={state} />}
    />

</CalendarProvider>
</View>
</GestureDetector>
<WeekNextButtons seletedDate={seletedDate} setSelectedDate={setSelectedDate} />
</View>
  )
}

export default MyWeekList