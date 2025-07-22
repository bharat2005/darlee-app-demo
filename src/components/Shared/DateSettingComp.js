import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import { Button } from 'react-native-paper'
import { useCurrentUser } from '../../hooks/useCurrentUser'
import { useDetailsChange } from '../../hooks/useDetailsChange'
import { format } from 'date-fns'
import { Entypo } from '@expo/vector-icons'
import DatePicker from 'react-native-date-picker'
import { Timestamp } from '@react-native-firebase/firestore'
import Toast from 'react-native-toast-message'
import { router } from 'expo-router'
import MyColors from '../../constants/MyColors'

const DateSettingComp = ({}) => {
  const {data: userData} = useCurrentUser()
  const [dob, setDob] = useState(userData?.dob.toDate())
  const {mutateAsync: updateDetails} = useDetailsChange()
  const [isLoading, setIsLoading] = useState(false)
  const [showDatePicker, setShowDatePicker] = useState(false)

  const handleSave = async() => {
    setIsLoading(true)
    await updateDetails({id: 'dob', data: Timestamp.fromDate(dob)},{
      onSuccess: () => {
        Toast.show({
          type:'custome',
          text1:'Date of Birth Updated',
          text2:'Your date of birth has been updated successfully',
          props:{type:'success'}
        })
        router.back()
      }
    })
   setIsLoading(false)
  }


  return (
    <View style={{width:'100%', backgroundColor:'white', paddingHorizontal:28, paddingVertical:16, gap:12}}>
      <Text style={{fontSize:14, fontFamily:'Outfit-Light', color:'gray', marginBottom:8}}>Change your date of birth. Select a date of birth you want to change.</Text>

   <TouchableOpacity onPress={()=> setShowDatePicker(true)} style={{width:'100%', height:50, backgroundColor:'lightgray', justifyContent:'space-between', alignItems:'center', flexDirection:'row', paddingHorizontal:12, borderRadius:12}}>
     <Text style={{fontSize:14, fontFamily:'Outfit-Light', color:'black'}}>{userData ? format(dob, 'yyyy/MM/dd') : 'Select Date of Birth'}</Text> 
    <Entypo name="chevron-down" size={24} color="gray" />
   </TouchableOpacity>

   <DatePicker
        modal
        mode='date'
        title='Select Date of Birth'
        open={showDatePicker}
        date={dob || new Date()}
        onConfirm={(date) => {
          setShowDatePicker(false)
          setDob(date)
        }}
        onCancel={() => {
          setShowDatePicker(false)
        }}
      />

<Button
    labelStyle={{fontSize:16, fontFamily:'Outfit-Medium', color:'white'}}
    theme={{
      roundness:2
    }}
    onPress={handleSave} loading={isLoading} disabled={isLoading} 
    mode='contained' 
    style={{width:'100%', marginTop:18, backgroundColor:isLoading ? 'lightgray' : MyColors.DARK_GREY, height:44}} 
    contentStyle={{height:44}}
    >
        Save Changes
    </Button>

    </View>
  )
}

export default DateSettingComp