import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useLocalSearchParams } from 'expo-router'
import { useText } from '../../src/hooks/useText'
import TPScreenHeader from '../../src/components/TPScreen/TPScreenHeader'
import ScreenHeader from '../../src/components/Shared/ScreenHeader'

const TPScreen = () => {
    const {id} = useLocalSearchParams()
    const {data: text} = useText(id)

  return (
    <SafeAreaView style={{flex:1}}>

    <ScreenHeader title={id === 'terms' ? 'Terms & Conditions' : 'Privacy Policy'} />

      <ScrollView>
      <Text>{text}</Text>
      </ScrollView>
    </SafeAreaView>
  )
}

export default TPScreen