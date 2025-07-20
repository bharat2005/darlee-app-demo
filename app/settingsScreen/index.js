import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useLocalSearchParams } from 'expo-router'
import SettingComp from '../../src/components/Shared/SettingComp'
import TextInputComp from '../../src/components/Shared/TextInputComp'
import { useCurrentUser } from '../../src/hooks/useCurrentUser'
import ScreenHeader from '../../src/components/Shared/ScreenHeader'
import DateInputComp from '../../src/components/Shared/DateInputComp'
import { format } from 'date-fns'


const SettingsScreen = () => {
    const {id} = useLocalSearchParams()
    const {data: userData} = useCurrentUser()
    const [nickname, setNickname] = useState(userData?.nickname)
    const [dob, setDob] = useState(userData?.dob.toDate())


const data = {
    name:{
        title: 'Change Nickname',
        secondaryTitle: 'Your nickname is your public display name. It can be changed at any time.',
        renderContent: <TextInputComp label='Nickname' value={nickname} onChangeText={(v) => setNickname(v)}  />
    },
    dob:{
        title: 'Change Date of Birth',
        secondaryTitle: 'Your date of birth is your public display name. It can be changed at any time.',
        renderContent: <DateInputComp label={format(userData?.dob, 'yyyy/MM/dd')} value={userData?.dob} setDate={(date)=> setDob(date)} />
    }
}


const handleSave = () => {
    console.log(id, id === 'name' ? nickname : dob)
}











  return (
    <SafeAreaView>

        <ScreenHeader title={data[id].title} />

        <SettingComp secondaryTitle={data[id].secondaryTitle} renderContent={data[id].renderContent} onPress={()=> console.log('save')} />
        
    </SafeAreaView>
  )
}

export default SettingsScreen