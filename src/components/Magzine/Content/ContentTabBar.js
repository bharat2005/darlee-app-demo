import { View, Text, Pressable } from 'react-native'
import React from 'react'
import MyColors from '../../../constants/MyColors'

const ContentTabBar = ({routes, setIndex, index}) => {
  return (
    <View style={{width:'100%', flexDirection:'row',}}>

        {
            routes.map((item, i)=> (
                <View key={item?.key} style={{overflow:'hidden', borderRadius:60}}>
                <Pressable onPress={()=> setIndex(i)} style={{paddingHorizontal:12, paddingVertical:12}} android_ripple={{color:'gray'}}>
                    <View style={{paddingVertical:8, paddingHorizontal:14, borderRadius:24, backgroundColor: index === i ? 'rgba(19, 184, 255, 0.49)' : 'lightgray'}}>
                        <Text style={{fontSize:14, fontFamily:'Outfit-Light', color:MyColors.DARK_BLUE}}>{item?.title}</Text>
                    </View>
                </Pressable>
                </View>
            ))
        }
        
    </View>
  )
}

export default ContentTabBar