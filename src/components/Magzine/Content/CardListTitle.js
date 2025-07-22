import { View, Text } from 'react-native'
import React from 'react'
import MyColors from '../../../constants/MyColors'

const CardListTitle = ({listData}) => {
  return (
    <View style={{width:'100%', height:40, flexDirection:'row', alignItems:'center', paddingHorizontal:12}}>
        <Text style={{fontSize:16, fontFamily:'Outfit-Medium', color:MyColors.DARK_BLUE}}>{listData?.title}</Text>
    </View>
  )
}

export default CardListTitle