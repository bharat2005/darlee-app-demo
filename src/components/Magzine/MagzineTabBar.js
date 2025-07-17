import { View, Text, Pressable } from 'react-native'
import React from 'react'

const MagzineTabBar = ({routes, setIndex, index}) => {
  return (
    <View style={{width:'100%', height:48, flexDirection:'row'}}>

        {
            routes.map((item, i)=>(
                <View key={item?.key} style={{flex:1, height:'100%'}}>
                    <Pressable android_ripple={{color:'gray'}} onPress={()=> setIndex(i)} style={{width:'100%', height:'95%', justifyContent:'center', alignItems:'center'}}>
                        <Text>{item?.title}</Text>
                    </Pressable>

                    {
                        index === i && (
                   <View style={{width:'100%', height:'5%', borderRadius:12, backgroundColor:'black', marginHorizontal:'auto'}} />
                        )
                    }
 
                </View>
            ))
        }
        
    </View>
  )
}

export default MagzineTabBar