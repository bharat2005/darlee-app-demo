import { View, Text } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'

const End = ({width, handleSubmit, isSubmitting}) => {
  return (
    <View style={{flex:1, width, backgroundColor:'lime', justifyContent:'center', alignItems:'center'}}>

      <Button mode='contained' onPress={handleSubmit} disabled={isSubmitting} loading={isSubmitting} >
        Care me
      </Button>
    
    </View>
  )
}

export default End