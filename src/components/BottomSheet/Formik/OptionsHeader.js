import { View, Text } from 'react-native'
import React from 'react'

const OptionsHeader = ({data}) => {
  return (
    <View style={{width:'100%', flexDirection: 'row', alignItems: 'center', paddingHorizontal:12}}>

        <View style={{ padding:4, justifyContent:'center', alignItems:'center'}}>
         {data?.icon}
        </View> 

        <View style={{justifyContent:'center', alignItems:'center', marginLeft:12}}>
            <Text style={{fontSize:16, fontFamily:'Outfit-Medium'}}>{data?.title}</Text>
        </View>

    </View>
  )
}

export default OptionsHeader