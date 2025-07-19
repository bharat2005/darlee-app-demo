import { View, Text } from 'react-native'
import React, { useState } from 'react'
import {  CalendarList } from 'react-native-calendars'
import CalandarHeaader from '../Shared/CalandarHeaader'
import { eachDayOfInterval, format, getDay, parseISO } from 'date-fns'
import Toast from 'react-native-toast-message'
import { usePeriods } from '../../hooks/usePeriods'

const MyPeriodCalander = ({periods, setPeriods}) => {
    const [currentStart, setCurrentStart] = useState(null)

    const handleDayPress = (day)=>{

        if(day.dateString >= format(new Date(), 'yyyy-MM-dd')) {
            Toast.show({
                type: 'custome',
                text1: 'Cannot select future dates',
                text2: 'Please select a past date',
                props: {type: 'error'}
            })
            return
        }
        
        

        const existingPeriodIndex = periods.findIndex(({start, end}, index)=> {
            const range = eachDayOfInterval({start: parseISO(start), end: parseISO(end)}).map(date => format(date, 'yyyy-MM-dd'))
            return range.includes(day.dateString)
        })

        if(existingPeriodIndex !== -1){
            const updatedPeriods = periods.filter((item, index) => index !== existingPeriodIndex)
            setPeriods(updatedPeriods)
            setCurrentStart(null)
        } else {
            if(!currentStart){
                setCurrentStart(day.dateString)
            } else{
                if(parseISO(currentStart).getTime() === parseISO(day.dateString).getTime()){
                    setCurrentStart(null)
                } else {
                    const period = parseISO(currentStart).getTime() > parseISO(day.dateString).getTime() 
                    ? 
                    {start: day.dateString, end: currentStart, phase:'period', source:'user'} 
                    : 
                    {start: currentStart, end: day.dateString, phase:'period', source:'user'}



                    const currnetRange = eachDayOfInterval({start: parseISO(currentStart), end: parseISO(day.dateString)}).map(date => format(date, 'yyyy-MM-dd'))

                    const isOverlapping =periods.some(({start, end}, index)=> {
                        const existingRange = eachDayOfInterval({start: parseISO(start), end: parseISO(end)}).map(date => format(date, 'yyyy-MM-dd'))
                        return existingRange.some(date => currnetRange.includes(date))
                    })

                    if(!isOverlapping){
                        setPeriods([...periods, period])
                        setCurrentStart(null)
                    } else {
                        Toast.show({
                            type: 'custome',
                            text1: 'Period Overlapping',
                            text2: 'The selected period overlaps with an existing period. Please select a different period.',
                            props: {type: 'error'}
                        })
                        setCurrentStart(null)
                    }
                }
        }
    }}

    const getMarkedDates = () => {
        const markedObj = {}
        periods.forEach((item)=> {
            if(item.phase !== 'period') return
            const range = eachDayOfInterval({start: parseISO(item.start), end: parseISO(item.end)}).map(date => format(date, 'yyyy-MM-dd'))
            range.forEach((dateString, index) => {
                if(index === 0){
                    markedObj[dateString] = { startingDay: true, color: item.source === 'user' ? 'hotpink' : 'tomato', textColor:'white'}
                }
               else if(index === range.length - 1){
                    markedObj[dateString] = {endingDay: true, color: item.source === 'user' ? 'hotpink' : 'tomato', textColor:'white'}
                }
            else{
                    markedObj[dateString] = {color: item.source === 'user' ? 'lightpink' : 'tomato', textColor:'white'}
                }
            })
        })

        if(currentStart && (!(periods.some(p => p?.start === currentStart)) || periods.length === 0)){
            markedObj[currentStart] = {startingDay: true, endingDay: true, color:'tomato', textColor:'white'}
        }

        return markedObj
}

 

  return (
    <View style={{flex:1, backgroundColor:'white', width:'100%', height:'100%'}}>
        
        <CalendarList
        renderHeader={(date)=> <CalandarHeaader date={date} />}
        markingType='period'
        markedDates={getMarkedDates()}
        onDayPress={handleDayPress}
        theme={{
            todayTextColor: 'red',
            todayBackgroundColor: 'yellow',
        }}
        />

        
    </View>
  )
}

export default MyPeriodCalander