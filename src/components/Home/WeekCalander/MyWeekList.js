import React from 'react'
import { CalendarProvider, WeekCalendar } from 'react-native-calendars'
import WeekNextButtons from './WeekNextButtons'
import { StyleSheet, View } from 'react-native'

const MyWeekList = ({seletedDate, setSelectedDate}) => {

  const handleDayPress = (day)=> {
  setSelectedDate(day.dateString)
  }


  return (
<>
<View style={{width:'100%', height:85}}>
<CalendarProvider date={seletedDate} >

    <WeekCalendar 
    firstDay={1}
    onDayPress={handleDayPress}
    dayComponent={({date})=> {
        return <View style={{width:100, height:100, backgroundColor:'blue'}} />
    }}
    theme={{
        calendarBackground: 'transparent',
        textSectionTitleColor: 'black',
    }}
    />


</CalendarProvider>
</View>
<WeekNextButtons seletedDate={seletedDate} setSelectedDate={setSelectedDate} />
</>
  )
}

export default MyWeekList