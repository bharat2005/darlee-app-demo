import { View, Text } from 'react-native'
import React from 'react'
import { CalendarProvider, WeekCalendar } from 'react-native-calendars'
import { dateStore } from '../../stores/dateStore'

const MyWeekList = ({seletedDate}) => {


  return (
<CalendarProvider date={seletedDate}>

    <WeekCalendar 
    firstDay={1}
    theme={{
        calendarBackground: 'transparent',
        textSectionTitleColor: 'black',
    }}
    />

</CalendarProvider>
  )
}

export default MyWeekList