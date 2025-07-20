import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import ScreenHeader from '../../src/components/Shared/ScreenHeader'

const ProfileDetial = () => {
    const data = [
        {title:'Name', value:user?.name},
    ]
  return (
    <SafeAreaView style={{flex:1}}>
        <ScreenHeader title='Profile Detail' />


        <FlatList
        data
        />
     
    </SafeAreaView>
  )
}

export default ProfileDetial