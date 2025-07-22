import { View, Text, Pressable } from 'react-native'
import React from 'react'
import MyColors from '../../constants/MyColors'

const MagzineTabBar = ({routes, setIndex, index}) => {
  return (
    <View style={{width:'100%', height:48, flexDirection:'row'}}>

        {
            routes.map((item, i)=>(
                <View key={item?.key} style={{flex:1, height:'100%'}}>
                    <Pressable android_ripple={{color:'gray'}} onPress={()=> setIndex(i)} style={{width:'100%', height:'95%', justifyContent:'center', alignItems:'center'}}>
                        <Text style={{fontSize:16, fontFamily:'Outfit-Medium', color:MyColors.DARK_BLUE}}>{item?.title}</Text>
                    </Pressable>

                    {
                        index === i && (
                   <View style={{width:'90%', marginHorizontal:'auto', height:'5%', borderRadius:12, backgroundColor:MyColors.DARK_BLUE,}} />
                        )
                    }
 
                </View>
            ))
        }
        
    </View>
  )
}

export default MagzineTabBar