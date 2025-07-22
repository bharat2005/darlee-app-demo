import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import SubOptionComp from './SubOptionComp'

const SubOptionBox = ({data, subValues, setFieldValue}) => {




  return (
    <View style={{width: '100%',paddingHorizontal:12}}>
        
        <View style={{width: '90%', gap:8, marginLeft:'auto', marginTop:12}}>
            <Text style={{fontSize:14, fontFamily:'Outfit-Light'}}>{data?.subTitle}</Text>

            <View style={{borderWidth:0.8, borderColor:'lightgray', borderRadius:12, padding:14}}>

                <FlatList
                scrollEnabled={false}
                contentContainerStyle={{gap:12}}
                data={data?.options}
                renderItem={({item, index}) => <SubOptionComp item={item} value={subValues[item?.id]} setFieldValue={(v)=> setFieldValue(item?.id,v)} />}
                />

            </View>

        </View>
    </View>
  )
}

export default SubOptionBox