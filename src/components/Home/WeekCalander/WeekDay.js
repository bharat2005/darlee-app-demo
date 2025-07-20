import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Pressable, Text, View } from 'react-native'

const WeekDay = ({date, marking, state, onPress, seletedDate}) => {
    const isToday = state === 'today'
    const isSelected = seletedDate === date.dateString
    const hasMarking = marking?.phaseColor


    const getBGColor = () => {
        if(hasMarking){
            return {backgroundColor: marking?.phaseColor, color: 'white'}
        } 
        if(isSelected){
            return { backgroundColor: 'white', color: 'black'}
        }
        return {backgroundColor: 'transparent', color: 'black'}
    }

    const getBorderColor = () => {
        if(isToday){
            return 'hotpink'
        }
        if(isSelected){
            return 'black'
        }
        return 'transparent'
    }
  
    return (
        <View style={{width:'100%', height:'100%', justifyContent:'center', alignItems:'center'}}>
            <TouchableOpacity onPress={onPress} style={{backgroundColor:getBGColor().backgroundColor, width:'65%', height:'100%', borderRadius:'40%', justifyContent:'center', alignItems:'center', borderWidth:2, borderColor:getBorderColor()}}>
                <Text style={{fontSize:16, fontWeight:'medium', color:getBGColor().color}}>{date?.day}</Text>
            </TouchableOpacity>

        </View>
    )
}

export default WeekDay