import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useLocalSearchParams } from 'expo-router'
import { useText } from '../../src/hooks/useText'
import TPScreenHeader from '../../src/components/TPScreen/TPScreenHeader'

const TPScreen = () => {
    const {id} = useLocalSearchParams()
    const {data: text} = useText(id)

  return (
    <SafeAreaView style={{flex:1}}>

    <TPScreenHeader id={id} />

      <ScrollView>
      <Text>{text}</Text>
      </ScrollView>
    </SafeAreaView>
  )
}

export default TPScreen