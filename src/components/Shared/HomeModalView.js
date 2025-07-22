import { View, Text } from 'react-native'
import React from 'react'
import MyColors from '../../constants/MyColors'
import { Ionicons } from '@expo/vector-icons'

const data =[

    {
        title:'Expected Period Date',
        color:MyColors.PERIOD_COLOR
    },
    {
        title:'Follicular Phase',
        color:MyColors.FOLICULAR_COLOR
    },
    {
        title:'Ovulation',
        color:MyColors.OVULATION_COLOR
    },
    {
        title:'Luteal Phase',
        color:MyColors.LUTEAL_COLOR
    }
 
]

const HomeModalView = () => {
  return (
    <View style={{width:'100%', paddingHorizontal:8}}>
      <Text style={{fontSize:14, fontFamily:'Outfit-Medium',marginBottom:4, textAlign:'left'}}>Periods Representation</Text>

      {
        data.map((item, index)=> (
            <View key={index} style={{flexDirection:'row', alignItems:'center', gap:12, marginVertical:14}}>
                <View style={{width:44, height:28, backgroundColor:item.color, borderRadius:4}}>
                    {
                        item.title === 'Ovulation' && (
                            <Ionicons name="egg" size={14} color={MyColors.DARK_BLUE} style={{position:'absolute', bottom:2, right:4}} />
                        )
                    }
                </View>
                <Text style={{fontSize:14, fontFamily:'Outfit-Light', color:'rgb(57, 57, 57)'}}>{item.title}</Text>
            </View>
        ))
      }

    </View>
  )
}

export default HomeModalView