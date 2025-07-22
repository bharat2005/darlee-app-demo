import { View, Text, FlatList } from 'react-native'
import React, { useRef } from 'react'
import { useCallback } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import ScreenHeader from '../../src/components/Shared/ScreenHeader'
import { TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { router, useFocusEffect } from 'expo-router'

const ProfileDetial = () => {
  const navigationRef = useRef(false)
    const data = [
        {title:'Nickname', id:'name'},
        {title:'Date of Birth', id:'dob'},
    ]

    useFocusEffect(
        useCallback(()=> {
            navigationRef.current = false
        })
    )



    const renderItem = ({item}) => (
      <TouchableOpacity activeOpacity={0.7} onPress={()=>{
            if(navigationRef.current) return
            navigationRef.current = true
            router.push({pathname:'/settingsScreen', params:{id:item.id}})
        }} style={{height:50, backgroundColor:'white', width:'100%', flexDirection:'row', alignItems:'center', paddingHorizontal:18, justifyContent:'space-between'}}>
        <Text style={{fontSize:14, fontFamily:'Outfit-Light', color:'black'}}>{item.title}</Text>
        <Ionicons name="chevron-forward" size={22} color="gray" />
    </TouchableOpacity>
    )

  return (
    <SafeAreaView style={{flex:1, backgroundColor:'white'}}>
        <ScreenHeader title='Account Settings' />
        <FlatList
        data={data}
        keyExtractor={(item)=>item.id}
        scrollEnabled={false}
        renderItem={renderItem}
        />
     
    </SafeAreaView>
  )
}

export default ProfileDetial