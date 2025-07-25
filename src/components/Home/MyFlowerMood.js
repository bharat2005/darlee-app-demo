import { View, Text, FlatList, ActivityIndicator } from 'react-native'
import React from 'react'
import { getWeekDays } from '../../utils/getWeekDays'
import CuteMood from './WeekCalander/CuteMood'
import { useRecords } from '../../hooks/useRecord'
import { format } from 'date-fns'
import MyColors from '../../constants/MyColors'



const MyFlowerMood = ({handleSheet,weekDays, seletedDate}) => {
  
   const {data:records} = useRecords(weekDays)

  if(records === undefined) {
    return (
      <View style={{width:'100%', height:100,  backgroundColor:MyColors.LIGHT_PRIMARY,  paddingHorizontal:16, justifyContent:'center', alignItems:'center'  }}>
        <ActivityIndicator size='large' color={MyColors.DARK_BLUE} />
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