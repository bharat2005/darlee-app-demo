import { View, Text } from 'react-native'
import React from 'react'

const IconsPreview = ({array}) => {
  return (
    <View style={{width:'100%', flexDirection:'row', gap:4, justifyContent:'center', alignItems:'center', flexWrap:'wrap'}}>
      {
        array.map((item, index)=> (
            <View key={index} style={{width:44, height:44, backgroundColor:'pink'}}>
                <Text>{item}</Text>
            </View>
        ))
      }
    </View>
  )
}

export default IconsPreview