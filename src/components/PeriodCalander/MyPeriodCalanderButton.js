import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useMutatePeriod } from '../../hooks/useMutatePeriod'
import Toast from 'react-native-toast-message'
import { router } from 'expo-router'
import { Button } from 'react-native-paper'
import { geminiPeriodPrediction } from '../../services/gemini/geminiPeriodPrediction'

const MyPeriodCalanderButton = ({periods, setPeriods, mutatePeriods}) => {
    const [isLoading, setIsLoading] = useState(false)

    const handleAddPeriod = () => {
        setIsLoading(true)
        mutatePeriods({periods}, {
            onSuccess: async() => {  
                await geminiPeriodPrediction()
                Toast.show({type:'custome', text1:'Periods Added', props: {type: 'success'}})
                router.back()
            },
            onError: () => {
                Toast.show({type:'custome', text1:'Error Adding Periods', props: {type: 'error'}})
            }
        })
    }

  return (
    <View style={{width:'100%', height:50, backgroundColor:'white', paddingHorizontal:12}}>
        
        <Button mode='contained' disabled={isLoading} loading={isLoading} style={{width:'100%', height:'100%',backgroundColor:'hotpink'}} contentStyle={{height:'100%', width:'100%'}} onPress={handleAddPeriod} >
        Add Period
        </Button>
    </View>
  )
}

export default MyPeriodCalanderButton