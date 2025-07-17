import { View, Text } from 'react-native'
import React from 'react'

const OptionsHeader = ({data}) => {
  return (
    <View style={{width:'100%', flexDirection: 'row', alignItems: 'center'}}>

        <View style={{height:44, width:44, backgroundColor:'black'}}>
         
        </View> 

        <View style={{justifyContent:'center', alignItems:'center', marginLeft:12}}>
            <Text style={{fontSize:14, fontWeight:'bold'}}>{data?.title}</Text>
        </View>

    </View>
  )
}

export default OptionsHeader