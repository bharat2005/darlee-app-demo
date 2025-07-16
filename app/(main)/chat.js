import { View, Text, KeyboardAvoidingView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import MainTopBar from '../../src/components/Shared/MainTopBar'

const Chat = () => {
  return (
    <KeyboardAvoidingView behavior='height'>
      <SafeAreaView edges={['top']}>

        <MainTopBar title='Chat' type='chat' />

      

      </SafeAreaView>
    </KeyboardAvoidingView>
  )
}

export default Chat