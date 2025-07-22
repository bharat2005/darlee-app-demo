import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Pressable, Text, View } from 'react-native'
import MyColors from '../../../constants/MyColors'
import { Ionicons } from '@expo/vector-icons'

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
            return MyColors.DARK_BLUE
        }
        if(isSelected){
            return MyColors.DARK_BLUE
        }
        return 'transparent'
    }
  
    return (
        <View style={{width:'100%', height:'100%', justifyContent:'center', alignItems:'center'}}>
            <TouchableOpacity activeOpacity={0.7} onPress={onPress} style={{backgroundColor:getBGColor().backgroundColor, width:'65%', height:'100%', borderRadius:'38%', justifyContent:'center', alignItems:'center', borderWidth:isToday ? 3 : 2, borderColor:getBorderColor()}}>
                <Text style={{fontSize:15, fontWeight:'medium', color:getBGColor().color, fontFamily:'Outfit-Medium'}}>{date?.day}</Text>

            {
                marking?.phase === 'ovulation' && <Ionicons style={{position:'absolute', bottom:0, right:0}} name="egg" size={13} color={MyColors.DARK_BLUE} />
            }
            
            </TouchableOpacity>

        </View>
    )
}

export default WeekDay