import { View, Text, Animated } from 'react-native'
import React from 'react'

const MyCutieFlower = () => {
  return (
    <View style={{width:'100%', justifyContent:'center', alignItems:'center'}}>

        <Animated.View style={{width:1, height:320, backgroundColor:'black'}} >
            <View style={{ height:50, width:50, backgroundColor:'black', position:'absolute', top:0, right:-24.5}} />
        </Animated.View>
      
    </View>
  )
}

export default MyCutieFlower