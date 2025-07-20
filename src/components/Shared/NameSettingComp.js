import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Button, TextInput } from 'react-native-paper'
import { useCurrentUser } from '../../hooks/useCurrentUser'
import { useDetailsChange } from '../../hooks/useDetailsChange'
import Toast from 'react-native-toast-message'
import { router } from 'expo-router'

const NameSettingComp = ({}) => {
  const {data: userData} = useCurrentUser()
  const [name, setName] = useState(userData?.name)
  const {mutateAsync: updateDetails} = useDetailsChange()
  const [isLoading, setIsLoading] = useState(false)

  const handleSave = async() => {
    setIsLoading(true)
   await updateDetails({id: 'name', data: name}, {
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
    <View style={{width:'100%', backgroundColor:'white', paddingHorizontal:12, paddingVertical:16}}>
      <Text style={{fontSize:16, fontWeight:'400', color:'gray'}}>This is your public display name. It can be changed at any time.</Text>

      <TextInput
      value={name}
      onChangeText={(v)=> setName(v)}
      mode='outlined'
      right={ name && <TextInput.Icon icon='close' onPress={()=> setName('')} />}
      />

    <Button onPress={handleSave} loading={isLoading} disabled={isLoading} mode='contained' style={{width:'100%', marginTop:12, height:50}} contentStyle={{height:50}}>
        Save Changes
    </Button>

    </View>
  )
}

export default NameSettingComp