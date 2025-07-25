import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Button, TextInput } from 'react-native-paper'
import { useCurrentUser } from '../../hooks/useCurrentUser'
import { useDetailsChange } from '../../hooks/useDetailsChange'
import Toast from 'react-native-toast-message'
import { router } from 'expo-router'
import MyColors from '../../constants/MyColors'

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
        text1:'Name Updated',
        text2:'Your name has been updated successfully',
        props:{type:'success'}
      })
      router.back()
    }
   })
   setIsLoading(false)
  }

  return (
    <View style={{width:'100%', backgroundColor:'white', paddingHorizontal:28, paddingVertical:16, gap:12}}>
      <Text style={{fontSize:14, fontFamily:'Outfit-Light', color:'gray', marginBottom:8}}>Change your nickname. Enter a new nickname that you want to set as a new one.</Text>

      <TextInput
      placeholder='Enter your name'
      style={{backgroundColor:'rgba(0, 0, 0, 0.05)'}}
      theme={{colors:{primary:MyColors.PRIMARY, outline:'lightgray'}, roundness:12}}
      value={name}
      onChangeText={(v)=> setName(v)}
      mode='outlined'
      right={ name && <TextInput.Icon icon='close' color='gray' onPress={()=> setName('')} />}
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

export default NameSettingComp