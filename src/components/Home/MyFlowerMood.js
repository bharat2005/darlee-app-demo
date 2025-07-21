import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { getWeekDays } from '../../utils/getWeekDays'
import CuteMood from './WeekCalander/CuteMood'
import { useRecords } from '../../hooks/useRecord'
import { format } from 'date-fns'
import MyColors from '../../constants/MyColors'



const MyFlowerMood = ({handleSheet, seletedDate, weekDays}) => {
  
   const {data:records} = useRecords(weekDays)

  if(records === undefined) {
    return (
      <View style={{width:'100%', height:100, backgroundColor:'pink', paddingHorizontal:16, justifyContent:'center', alignItems:'center'  }}>
        <Text>Loading...</Text>
      </View>
    )
  }



  return (
    <View style={{width:'100%', backgroundColor:MyColors.LIGHT_PRIMARY, paddingHorizontal:16}}>

      <FlatList
      horizontal
      scrollEnabled={false}
      keyExtractor={(item,index)=>index.toString()}
      data={records}
      renderItem={({item,index})=> <CuteMood dateString={weekDays[index]} data={item} handleSheet={handleSheet} isFutureToday={format(new Date(), 'yyyy-MM-dd') <= weekDays[index]} />}
      
      />
      
    </View>
  )
}

export default MyFlowerMood