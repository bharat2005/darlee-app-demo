import { View, Text } from 'react-native'
import React from 'react'
import MyColors from '../../constants/MyColors'
import { Ionicons } from '@expo/vector-icons'

const data =[

    {
        title:'Menstrual Period (Recorded)',
        color:MyColors.DARK_PURPLE
    },
    {
        title:'Expected Period Date',
        color:MyColors.PERIOD_COLOR
    },

 
]

const HomeModalView = () => {
  return (
    <View style={{width:'100%', paddingHorizontal:8}}>
      {
        data.map((item, index)=> (
            <View key={index} style={{flexDirection:'row', alignItems:'center', gap:12, marginVertical:14}}>
                <View style={{width:38, height:38, borderRadius:'50%', backgroundColor:item.color}}/>
                <Text style={{fontSize:14, fontFamily:'Outfit-Light', color:'rgb(57, 57, 57)'}}>{item.title}</Text>
            </View>
        ))
      }

      <Text style={{fontSize:14, fontFamily:'Outfit-Light', color:'rgb(57, 57, 57)', marginVertical:14}}>
        When you slect the sstart date fo your period, the number of days in your period will be automaticllay reflected. You can cahnge the number of days in your period from the preiod prediciotn on Home page.
      </Text>

    </View>
  )
}

export default HomeModalView