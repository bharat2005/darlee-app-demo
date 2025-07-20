import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useLocalSearchParams } from 'expo-router'
import NameSettingComp from '../../src/components/Shared/NameSettingComp'
import { useCurrentUser } from '../../src/hooks/useCurrentUser'
import ScreenHeader from '../../src/components/Shared/ScreenHeader'
import DateSettingComp from '../../src/components/Shared/DateSettingComp'




const data = {
    name: {
        title: 'Change Nickname',
    },
    dob: {
        title: 'Change Date of Birth',
    }
}


const SettingsScreen = () => {
    const {id} = useLocalSearchParams()













  return (
    <SafeAreaView>

        <ScreenHeader title={data[id].title} />

        {
            id === 'name' ? 
            (
                <NameSettingComp id={id}  />
            ): 
            (
                 <DateSettingComp id={id}  />
            )
        }
        
    </SafeAreaView>
  )
}

export default SettingsScreen