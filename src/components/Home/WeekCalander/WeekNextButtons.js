import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { addDays, format, parseISO, subDays } from 'date-fns'

const WeekNextButtons = ({seletedDate, setSelectedDate}) => {
    const handlePrev = ()=> {
        setSelectedDate(format(subDays(parseISO(seletedDate), 7), 'yyyy-MM-dd'))
    }

    const handleNext = ()=> {
       setSelectedDate(format(addDays(parseISO(seletedDate), 7), 'yyyy-MM-dd'))
    }

  return (
    <View style={{flexDirection:'row', height:50, justifyContent:'space-between', alignItems:'center'}}>
        
        <TouchableOpacity style={{ backgroundColor:'rgb(36, 186, 255)', borderRadius:4, padding:10}} onPress={handlePrev}>
            <Text>Prev</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{backgroundColor:'rgb(36, 186, 255)', borderRadius:4, padding:10}} onPress={handleNext}>
            <Text>Next</Text>
        </TouchableOpacity>

    </View>
  )
}

export default WeekNextButtons