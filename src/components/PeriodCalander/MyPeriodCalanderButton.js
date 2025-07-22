import { View, Text, TouchableOpacity, Modal, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import { useMutatePeriod } from '../../hooks/useMutatePeriod'
import Toast from 'react-native-toast-message'
import { router } from 'expo-router'
import { Button } from 'react-native-paper'
import { geminiPeriodPrediction } from '../../services/gemini/geminiPeriodPrediction'
import { useQueryClient } from '@tanstack/react-query'
import MyColors from '../../constants/MyColors'

const MyPeriodCalanderButton = ({periods, setPeriods, mutatePeriods}) => {
    const [isLoading, setIsLoading] = useState(false)
    const queryClient = useQueryClient()

    const handleAddPeriod = () => {
        setIsLoading(true)
        mutatePeriods({periods}, {
            onSuccess: async() => {  
                await geminiPeriodPrediction()
                queryClient.invalidateQueries(['periods'])
                Toast.show({type:'custome', text1:'Periods Added', props: {type: 'success'}})
                setIsLoading(false)
            },
            onError: () => {
                Toast.show({type:'custome', text1:'Error Adding Periods', props: {type: 'error'}})
            }
        })
    }

  return (
    <View style={{width:'100%', height:50, backgroundColor:'white', paddingHorizontal:24, justifyContent:'center'}}>
        
        <Button mode='contained'  
        labelStyle={{fontSize:16, fontFamily:'Outfit-Medium', color:'white'}}
        theme={{
            roundness:2
        }}
        style={{ height:44,backgroundColor:MyColors.DARK_GREY}} 
        contentStyle={{height:44, width:'100%'}} 
        onPress={handleAddPeriod} >
        Add Period
        </Button>


        <Modal visible={isLoading} backdropColor={1} animationType='none'>
            <ActivityIndicator size='large' color={MyColors.DARK_BLUE} style={{marginVertical:'auto', marginHorizontal:'auto'}} />
        </Modal>
    </View>
  )
}

export default MyPeriodCalanderButton