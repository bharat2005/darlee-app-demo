import React from 'react'
import { Text, View } from 'react-native'
import { useDateStore } from '../../stores/dateStore'

const DayComponent = ({date, marking, state}) => {
  const {selectedDate, setSelectedDate} = useDateStore()

  console.log(selectedDate)
  return (
    <View style={{width:'100%', height:80, justifyContent:'center', alignItems:'center', borderBottomWidth:1, borderBottomColor:'#ccc'}}>
      <Text style={{fontSize:16, fontWeight:'bold'}}>{state === 'disabled' ? '' : date?.day}</Text>
    </View>
  )
}

export default DayComponent