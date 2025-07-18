import React, { useEffect } from 'react'
import { CalendarProvider, WeekCalendar } from 'react-native-calendars'
import WeekNextButtons from './WeekNextButtons'
import { View } from 'react-native'
import { Gesture, GestureDetector } from 'react-native-gesture-handler'
import { getDay, getISODay, parseISO } from 'date-fns'


const MyWeekList = ({seletedDate, setSelectedDate, handleDayPress}) => {


  useEffect(()=>{
    handleDayPress(getISODay(parseISO(seletedDate)))
  },[seletedDate])



  return (
<>
<GestureDetector gesture={Gesture.Pan().onStart((e)=>{})}>
<View style={{width:'100%', height:85}}>
<CalendarProvider date={seletedDate} >

    <WeekCalendar 
    firstDay={1}
    onDayPress={(day)=> setSelectedDate(day.dateString)}
    theme={{
        calendarBackground: 'transparent',
        textSectionTitleColor: 'black',
    }}
    />

</CalendarProvider>
</View>
</GestureDetector>
<WeekNextButtons seletedDate={seletedDate} setSelectedDate={setSelectedDate} />
</>
  )
}

export default MyWeekList