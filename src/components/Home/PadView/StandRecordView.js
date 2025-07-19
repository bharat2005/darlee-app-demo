import { View, Text } from 'react-native'
import React, { useMemo } from 'react'
import { useRecords } from '../../../hooks/useRecord'
import { TouchableOpacity } from 'react-native'
import { dateStore } from '../../../stores/dateStore'
import IconsPreview from '../../Shared/IconsPreview'

const StandRecordView = ({weekDays, selectedDate, handleSheet}) => {
    const {data:records} = useRecords(weekDays, {refetchOnWindowFocus:false, refetchOnMount:false})
    const setSelectedDate = dateStore(state => state.setSelectedDate)

    const record = useMemo(()=> {
        const record = records?.find(record => record?.docId === selectedDate)
        if(record) {
          const {condition, heart, message, body} = record
          const obj = {condition, heart, message, body}
          const list = Object.values(obj).filter(item => item !== '')
          return list.length > 0 ? list : null
        } else {
          return null
        }
    },[records, selectedDate])


    const onRecordPress = () => {
        setSelectedDate(selectedDate)
        handleSheet('open')
    }


    
    if(record === null) {
        return (
          <View style={{width:'100%', backgroundColor:'snow', height:'30%', marginVertical:'auto', justifyContent:'center', alignItems:'center'}}>
         <TouchableOpacity onPress={onRecordPress} style={{backgroundColor:'tomato', padding:10, borderRadius:10, marginVertical:'auto'}}>
          <Text>Add Record</Text>
         </TouchableOpacity>
          </View>
        )
    }


  return (
    <View style={{width:'100%', backgroundColor:'snow', height:'30%', marginVertical:'auto', justifyContent:'center', alignItems:'center', padding:18}}>

        <IconsPreview array={record} />

        <TouchableOpacity onPress={onRecordPress} style={{backgroundColor:'tomato', padding:10, borderRadius:10, marginTop:'auto'}}>
          <Text>Edit Record</Text>
         </TouchableOpacity>
    </View>
  )
}

export default StandRecordView