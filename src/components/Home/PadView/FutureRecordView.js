import { View, Text, ActivityIndicator } from 'react-native'
import React, { useEffect } from 'react'
import { getWeekKey } from '../../../utils/getWeekKey'
import { useMoodPredictions } from '../../../hooks/useMoodPredictions'
import { geminiMoodPrediciton } from '../../../services/gemini/geminiMoodPrediciton'
import { useQueryClient } from '@tanstack/react-query'
import Toast from 'react-native-toast-message'
import IconsPreview from '../../Shared/IconsPreview'

const FutureRecordView = ({selectedDate}) => {
  const weekKey = getWeekKey(selectedDate)  
  const {data: predictions, isLoading} = useMoodPredictions(weekKey)
  const queryClient = useQueryClient()

  useEffect(()=> {
    if(isLoading || predictions) return
    handlePrediciton()
  },[isLoading, predictions])



  const handlePrediciton = async () => {
    const res = await geminiMoodPrediciton(weekKey)
    if(res.success) {
      queryClient.setQueryData(['mood-predictions', weekKey], res.data)
      queryClient.invalidateQueries({queryKey: ['mood-predictions', weekKey]})
    } else {
      Toast.show({
        text1: 'Error',
        text2: 'Failed to get mood prediction',
        type: 'custome',
        props:{success: false}
      })
    }
  }

  if(isLoading) {
    return (
      <View style={{width:'100%', backgroundColor:'tomato', height:'30%',  marginVertical:'auto', justifyContent:'center', alignItems:'center'}}>
        <ActivityIndicator size='large' color='black' />
      
      </View>
    )
  }


  return (
    <View style={{width:'100%', backgroundColor:'tomato', height:'30%', justifyContent:'center', alignItems:'center',  marginVertical:'auto'}}>

  

      <IconsPreview array={ predictions ? Object.values(predictions) : []} />
       
    </View>
  )
}

export default FutureRecordView