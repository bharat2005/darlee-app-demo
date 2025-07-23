import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { dateStore } from '../../stores/dateStore'
import { format, parseISO } from 'date-fns'
import Toast from 'react-native-toast-message'
import MyColors from '../../constants/MyColors'
import { Ionicons } from '@expo/vector-icons'

const DayComponent = ({date, marking, state, handlSheet, isMarked, isFutureToday, phaseColor}) => {
  const setSelectedDate = dateStore(state => state.setSelectedDate)

const handleDatePress = () => {
  if(isFutureToday) {
    Toast.show({
      type: 'custome',
      text1: 'Future Date',
      text2: 'You can not select a future date',
      props:{
        type: 'error'
      }
    })
    return
  }
  setSelectedDate(format(parseISO(date.dateString), 'yyyy-MM-dd'))
  handlSheet('open')
}


if(state === 'today') {
  return (
    <View style={{width:'100%', height:55, justifyContent:'center', alignItems:'center', borderBottomWidth:1, borderBottomColor:'#ccc'}}>
      
      <View style={{width:36, height:36, justifyContent:'center', alignItems:'center', borderBottomWidth:1, borderBottomColor:'#ccc', backgroundColor:MyColors.DARK_BLUE, borderRadius:50, marginBottom:10}}>
        <Text style={{fontSize:16, fontFamily:"Outfit-Regular", color:'white'}}>{date?.day}</Text>
      </View>
    </View>
  )
}

if(state !== 'disabled' && isMarked) {
  return (
    <View style={{width:'100%', height:55, justifyContent:'center', alignItems:'center', borderBottomWidth:1, borderBottomColor:'#ccc'}}>
      <View style={{width:32, height:32, justifyContent:'center', alignItems:'center', borderBottomWidth:1, borderBottomColor:'#ccc', backgroundColor:'rgb(201, 201, 201)', borderRadius:50, marginBottom:10}}>
        <Text style={{fontSize:16, fontFamily:"Outfit-Regular", color:MyColors.DARK_BLUE}}>{date?.day}</Text>
      </View>
      <View style={{ borderWidth:1, borderColor:'lightgray', padding:2, position:'absolute', bottom:14, right:8, borderRadius:12, backgroundColor:'white'}} >
        <Ionicons name="checkmark" size={10} color={MyColors.DARK_BLUE } />
      </View>

      {phaseColor && state !== 'disabled' && <View style={{ height:6, backgroundColor:phaseColor, position:'absolute', bottom:0, right:0, left:0}}>
        {
          phaseColor === MyColors.OVULATION_COLOR && (
            <Ionicons style={{position:'absolute', bottom:0, right:'50%'}} name="egg" size={13} color={MyColors.DARK_BLUE} />
          )
        }
        </View>}
    </View>
  )
}



  return (
    <TouchableOpacity activeOpacity={state === 'disabled' ? 1 : 0.5} onPress={state === 'disabled' ? null : handleDatePress} style={{width:'100%', height:55, justifyContent:'center', alignItems:'center', borderBottomWidth:1, borderBottomColor:'#ccc'}}>
      <Text style={{fontSize:16, fontFamily:"Outfit-Regular", color:MyColors.DARK_BLUE}}>{state === 'disabled' ? '' : date?.day}</Text>
      {(isMarked && state !== 'disabled') && (
          <View style={{ backgroundColor:MyColors.DARK_BLUE, padding:2, position:'absolute', top:0, right:0, borderRadius:18}} >
            <Ionicons name="checkmark" size={13} color={'white'} />
          </View>
      )}
      
      
      
      {phaseColor && state !== 'disabled' && <View style={{ height:6, backgroundColor:phaseColor, position:'absolute', bottom:0, right:0, left:0}}>
        {
          phaseColor === MyColors.OVULATION_COLOR && (
            <Ionicons style={{position:'absolute', bottom:0, right:'50%'}} name="egg" size={13} color={MyColors.DARK_BLUE} />
          )
        }
        </View>}
    </TouchableOpacity>
  )
}

export default DayComponent