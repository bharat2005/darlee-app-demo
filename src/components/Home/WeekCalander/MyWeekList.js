import React from 'react'
import { CalendarProvider, WeekCalendar } from 'react-native-calendars'
import WeekNextButtons from './WeekNextButtons'
import { View } from 'react-native'
import { Gesture, GestureDetector } from 'react-native-gesture-handler'

const MyWeekList = ({seletedDate, setSelectedDate}) => {

  const handleDayPress = (day)=> {
  setSelectedDate(day.dateString)
  }


  return (
<>
<GestureDetector gesture={Gesture.Pan().onStart((e)=>{})}>
<View style={{width:'100%', height:85}}>
<CalendarProvider date={seletedDate} >

    <WeekCalendar 
    firstDay={1}
    onDayPress={handleDayPress}
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