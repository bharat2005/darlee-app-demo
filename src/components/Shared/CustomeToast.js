import { View, Text } from 'react-native'
import React from 'react'

const CustomeToast = ({text1, text2, props}) => {
  return (
    <View style={{width:'80%', height:50, borderRadius:10, backgroundColor: props?.type === 'error' ? 'red' : 'green', justifyContent:'center', alignItems:'center'}}>
      <Text>{text1}</Text>
      <Text>{text2}</Text>
    </View>
  )
}

export default CustomeToast