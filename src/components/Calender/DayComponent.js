import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { dateStore } from '../../stores/dateStore'
import { format, parseISO } from 'date-fns'

const DayComponent = ({date, marking, state, handlSheet}) => {
  const setSelectedDate = dateStore(state => state.setSelectedDate)
  
const handleDatePress = () => {
  setSelectedDate(format(parseISO(date.dateString), 'yyyy.M.dd'))
  handlSheet('open')
}



  return (
    <TouchableOpacity onPress={handleDatePress} style={{width:'100%', height:80, justifyContent:'center', alignItems:'center', borderBottomWidth:1, borderBottomColor:'#ccc', backgroundColor: state === 'today' ? 'blue' : 'transparent'}}>
      <Text style={{fontSize:16, fontWeight:'bold'}}>{state === 'disabled' ? '' : date?.day}</Text>
    </TouchableOpacity>
  )
}

export default DayComponent