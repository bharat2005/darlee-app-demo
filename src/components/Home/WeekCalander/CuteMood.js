import { View, Text, Dimensions, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';
import { dateStore } from '../../../stores/dateStore'
import { date } from 'yup';
import Images from '../../../constants/Images'
import MyColors from '../../../constants/MyColors'

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
                    (<TouchableOpacity activeOpacity={0.7} onPress={onPlusPress} style={{justifyContent:'center', alignItems:'center', height:'100%', width:'100%'}}>
                        <AntDesign name="plus" size={18} color={MyColors.DARK_BLUE} />
                    </TouchableOpacity>)
                }
            </View>
        )
    }
    
  return (
    <View style={{width:(Dimensions.get('window').width - 32)/7, height:100, padding:2}}>
        <View style={{width:'100%', height:'100%', justifyContent:'center', alignItems:'center'}}>
       <Image source={Images[data?.condition]} style={{width:'90%', height:'60%'}} />
        </View>
    </View>
  )
}

export default CuteMood