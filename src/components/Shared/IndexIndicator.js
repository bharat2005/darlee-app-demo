import { View, Text } from 'react-native'
import React from 'react'
import MyColors from '../../constants/MyColors'

const IndexIndicator = ({arrayLength, currentIndex}) => {
  return (
    <View style={{width:'100%', flexDirection:'row', alignItems:'center', justifyContent:'center', gap:8, marginBottom:16}}>
    {
        [...Array(arrayLength)].map((item, index)=>(
            <View key={index} style={{width: index === currentIndex ? 18 : 4, height: index === currentIndex ? 5 : 4, borderRadius:10, backgroundColor:index === currentIndex ? MyColors.DARK_GREY : 'gray'}} />
        ))
    }
    </View>
  )
}

export default IndexIndicator