import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Image } from 'expo-image'

const ImageOptionList = ({data}) => {
  return (
    <View style={{width: 360, marginHorizontal: 'auto',marginVertical:12, flexDirection:'row', flexWrap: 'wrap'}}>
            {
                data?.options.map((item, index) => (
                    <View key={index} style={{width:360/5, padding: 2}}>
                        <TouchableOpacity>
                            <Image style={{width: '100%', height: 65, backgroundColor:'gray'}} />
                        </TouchableOpacity>
                        <Text style={{textAlign:'center'}}>{item.name}</Text>
                    </View>
                ))
            }
    </View>
  )
}

export default ImageOptionList