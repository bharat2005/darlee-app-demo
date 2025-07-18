import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import SubOptionComp from './SubOptionComp'

const SubOptionBox = ({data, subValues, setFieldValue}) => {




  return (
    <View style={{width: '100%', alignItems:'flex-end'}}>
        
        <View style={{width: '80%', gap:8}}>
            <Text>{data?.subTitle}</Text>

            <View style={{borderWidth:1, borderColor:'lightgray', borderRadius:12, padding:8}}>

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