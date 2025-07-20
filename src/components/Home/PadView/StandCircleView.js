import { View, Text, TouchableOpacity } from 'react-native'
import React, { useMemo } from 'react'
import { router } from 'expo-router'
import { usePeriods } from '../../../hooks/usePeriods'
import { differenceInCalendarDays, isAfter, isWithinInterval, parseISO } from 'date-fns'

const StandCircleView = ({seletedDate}) => {
  const {data: periods} = usePeriods()

  const text = useMemo(()=> {
    if(periods?.length === 0 || !periods) return 'No Periods Yet'

    const today = parseISO(seletedDate)
    const sortedPeriods = periods?.filter(period => period.phase === 'period')?.sort((a,b)=> parseISO(a.start) - parseISO(b.start))

    const currentPeriod = sortedPeriods?.find(period => {
      const start = parseISO(period.start)
      const end = parseISO(period.end)
      return isWithinInterval(today, {start, end})
    })

    if(currentPeriod){
      return `${differenceInCalendarDays(today, parseISO(currentPeriod.start)) + 1} days of period`
    }

    const upcomingPeriod = sortedPeriods?.find(period => {
      const start = parseISO(period.start)
      return isAfter(start, today)
      
    })

    if(upcomingPeriod){
      return `${differenceInCalendarDays(parseISO(upcomingPeriod.start), today)} days left for periods`
    }

    return 'No Periods Yet'


  },[seletedDate, periods])





  return (
    <View style={{width:275, height:275, marginTop:10,borderRadius:'50%', backgroundColor:'pink', justifyContent:'center', alignItems:'center'}}>

<Text style={{color:'white', fontSize:20, fontWeight:'bold'}}>{text}</Text>



      <TouchableOpacity onPress={()=> router.push('/periodCalanderScreen')} style={{ borderRadius:13, backgroundColor:'rgb(0, 195, 255)', padding:10}}>

        <Text style={{color:'white', fontSize:16, fontWeight:'bold'}}>Track Period</Text>

      </TouchableOpacity>
        
      
    </View>
  )
}

export default StandCircleView