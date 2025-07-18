import { View, Text } from 'react-native'
import React from 'react'
import Flower from '../../../../assets/svgs/Flower'
import Animated from 'react-native-reanimated'

const MyCutieFlower = ({flowerAnimationStyle}) => {

  return (
    <View style={{width:'100%', justifyContent:'center', alignItems:'center'}}>

        <Animated.View style={[flowerAnimationStyle, {width:1, height:320, backgroundColor:'white'}]} >
            <View style={{ height:50, width:50, backgroundColor:'pink', position:'absolute', top:0, right:-24.5}}>
                <Flower height={50} width={50} />
            </View>
        </Animated.View>
      
    </View>
  )
}

export default MyCutieFlower