import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { addDays, format, parseISO, subDays } from 'date-fns'
import MyColors from '../../../constants/MyColors'
import { Entypo } from '@expo/vector-icons'

const WeekNextButtons = ({seletedDate, setSelectedDate}) => {
    const handlePrev = ()=> {
        setSelectedDate(format(subDays(parseISO(seletedDate), 7), 'yyyy-MM-dd'))
    }

    const handleNext = ()=> {
       setSelectedDate(format(addDays(parseISO(seletedDate), 7), 'yyyy-MM-dd'))
    }

  return (
    <View style={{flexDirection:'row', height:50, justifyContent:'space-between', alignItems:'center'}}>
        
        <TouchableOpacity activeOpacity={0.7} style={{ backgroundColor:MyColors.DARK_BLUE, padding:10, paddingHorizontal:14, borderTopRightRadius:18, borderBottomRightRadius:18}} onPress={handlePrev}>
        <Entypo name="chevron-thin-left" size={18} color="white" />
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.7} style={{backgroundColor:MyColors.DARK_BLUE,  padding:10, paddingHorizontal:14, borderTopLeftRadius:18, borderBottomLeftRadius:18}} onPress={handleNext}>
        <Entypo name="chevron-thin-right" size={18} color="white" />
        </TouchableOpacity>

    </View>
  )
}

export default WeekNextButtons