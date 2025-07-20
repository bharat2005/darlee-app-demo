import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useCurrentUser } from '../../src/hooks/useCurrentUser'
import ProfileScreenHeader from '../../src/components/ProfileScreen/ProfileScreenHeader'
import MySectionList from '../../src/components/ProfileScreen/MySectionList'


const ProfileScreen = () => {
     const {data: user} = useCurrentUser()

  return (
    <SafeAreaView style={{flex:1}}>
        <ProfileScreenHeader user={user}/>

        <MySectionList />
        
    </SafeAreaView>
  )
}

export default ProfileScreen