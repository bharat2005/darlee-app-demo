import { View, Text } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'

const FormikButton = () => {
  return (
    <View style={{width:'100%', height:54, position:'absolute', bottom:0, left:0, right:0, paddingHorizontal:8, paddingVertical:4, backgroundColor:'white'}}>
        <Button mode='contained' style={{width:'100%', height:'100%'}} contentStyle={{height:'100%'}} labelStyle={{fontSize:16, fontWeight:'bold'}}>
            Save
        </Button>
    </View>
  )
}

export default FormikButton