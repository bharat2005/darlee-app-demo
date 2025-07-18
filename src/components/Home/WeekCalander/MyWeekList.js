import React from 'react'
import { CalendarProvider, WeekCalendar } from 'react-native-calendars'
import WeekNextButtons from './WeekNextButtons'
import { View } from 'react-native'

const MyWeekList = ({seletedDate, setSelectedDate}) => {

  const handleDayPress = (day)=> {
  setSelectedDate(day.dateString)
  }


  return (
  <View style={{width:'100%', height:130}}>
<CalendarProvider date={seletedDate}>

    <WeekCalendar 
    firstDay={1}
    onDayPress={handleDayPress}
    theme={{
        calendarBackground: 'transparent',
        textSectionTitleColor: 'black',
    }}
    />

</CalendarProvider>
<WeekNextButtons seletedDate={seletedDate} setSelectedDate={setSelectedDate} />
</View>
  )
}

export default MyWeekList