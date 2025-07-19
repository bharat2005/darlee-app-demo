import { View, Text, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';
import { dateStore } from '../../../stores/dateStore'
import { date } from 'yup';

const CuteMood = ({data, handleSheet, dateString, isFutureToday}) => {
    const setSelectedDate = dateStore(state => state.setSelectedDate)
    const selectedDate = dateStore(state => state.selectedDate)

    const onPlusPress = () => {
        setSelectedDate(dateString)
        handleSheet('open')
    }


    if(data === null  || !data?.condition) {
    
        return (
            <View style={{width:(Dimensions.get('window').width - 32)/7, height:100, padding:2}}>
                {
                    isFutureToday ?
                    (<></>) :
                    (<TouchableOpacity onPress={onPlusPress} style={{justifyContent:'center', alignItems:'center', height:'100%', width:'100%'}}>
                        <AntDesign name="plus" size={24} color="gray" />
                    </TouchableOpacity>)
                }
            </View>
        )
    }
    
  return (
    <View style={{width:(Dimensions.get('window').width - 32)/7, height:100, padding:2}}>
        <View style={{width:'100%', height:'100%',  backgroundColor:'white'}}>
        <Text>{data?.condition}</Text>
        </View>
    </View>
  )
}

export default CuteMood