import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { router, useLocalSearchParams } from 'expo-router'
import { useText } from '../../src/hooks/useText'
import { Button } from 'react-native-paper'
import { agreementStore } from '../../src/stores/aggrementStore'

const TextScreen = () => {
    const {id} = useLocalSearchParams()
    const {data:textData, error} = useText(id)
    const markTerms = agreementStore(state  => state.markTerms)
    const markPrivacy = agreementStore(state  => state.markPrivacy)

   

    
    
  return (
    <SafeAreaView style={{flex:1, justifyContent:'center', alignItems:'center'}}>
      <Text style={{textAlign:'center'}}>{textData}</Text>


{
  textData && (
      <View style={{position:'absolute', bottom:40}}>

        <Button onPress={()=> {
          id === 'terms' ? markTerms() : markPrivacy()
          router.back()
        }}>
          Read
        </Button>

      </View>

  )
}
     

    </SafeAreaView>
  )
}

export default TextScreen