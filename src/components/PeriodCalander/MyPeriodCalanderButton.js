import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const MyPeriodCalanderButton = () => {
  return (
    <View style={{width:'100%', height:50, backgroundColor:'white', padding:2}}>
        
        <TouchableOpacity style={{width:'100%', height:'100%',borderRadius:10, justifyContent:'center', alignItems:'center', backgroundColor:'hotpink'}}>
            <Text style={{fontSize:16, fontWeight:'bold', color:'black'}}>Add Period</Text>
        </TouchableOpacity>
    </View>
  )
}

export default MyPeriodCalanderButton