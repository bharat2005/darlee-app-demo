import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { router } from 'expo-router'

const StandCircleView = () => {
  return (
    <View style={{width:275, height:275, marginTop:10,borderRadius:'50%', backgroundColor:'pink', justifyContent:'center', alignItems:'center'}}>

      <TouchableOpacity onPress={()=> router.push('/periodCalanderScreen')} style={{ borderRadius:13, backgroundColor:'rgb(0, 195, 255)', padding:10}}>

        <Text style={{color:'white', fontSize:16, fontWeight:'bold'}}>Track Period</Text>

      </TouchableOpacity>
        
      
    </View>
  )
}

export default StandCircleView