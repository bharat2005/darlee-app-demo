import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { getWeekKey } from '../../../utils/getWeekKey'
import { useMoodPredictions } from '../../../hooks/useMoodPredictions'

const FutureRecordView = ({selectedDate}) => {
  const weekKey = getWeekKey(selectedDate)  
  const {data: predictions, isLoading} = useMoodPredictions(weekKey)

  useEffect(()=> {

    if(isLoading || predictions) return

    

  },[isLoading, predictions])


  return (
    <View style={{width:'100%', backgroundColor:'tomato', height:'30%', marginVertical:'auto'}}>
       
    </View>
  )
}

export default FutureRecordView