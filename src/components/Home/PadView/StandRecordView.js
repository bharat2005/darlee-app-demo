import { View, Text } from 'react-native'
import React, { useMemo } from 'react'
import { useRecords } from '../../../hooks/useRecord'

const StandRecordView = ({weekDays, selectedDate}) => {
    const {data:records} = useRecords(weekDays, {refetchOnWindowFocus:false, refetchOnMount:false})

    const record = useMemo(()=> {
        return records?.find(record => record?.docId === selectedDate)
    },[records, selectedDate])



  return (
    <View style={{width:'100%', backgroundColor:'snow', height:'30%', marginVertical:'auto'}}>
        <Text>{JSON.stringify(record)}</Text>
    </View>
  )
}

export default StandRecordView