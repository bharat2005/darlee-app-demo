import { View, Text } from 'react-native'
import React from 'react'
import MyColors  from '../../constants/MyColors'

const Mag2FlatIndicator = ({currentIndex, totalSteps}) => {
  return (
    <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center', gap:8, paddingHorizontal:24, width:'100%', marginTop:4}}>
        {
            Array.from({length:totalSteps}).map((_, index)=> (
                <View key={index} style={{flex:1, height:3, borderRadius:28, backgroundColor:index === currentIndex ? MyColors.DARK_GREY : 'rgb(168, 168, 168)'}} />
            ))
        }
    </View>
  )
}

export default Mag2FlatIndicator