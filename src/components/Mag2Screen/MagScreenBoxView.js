import { View, Text, Pressable, TouchableWithoutFeedback, Dimensions, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Mag2FlatIndicator from './Mag2FlatIndicator'
import { LinearGradient } from 'expo-linear-gradient'
import MyColors from '../../constants/MyColors'
import { router } from 'expo-router'
import MagScreenCardView from './MagScreenCardView'
import { Ionicons } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons'


const MagScreenBoxView = ({cardId, type, starredCardIds, fuckData, currentIndex, setCurrentIndex}) => {



  return (
    
    
    <LinearGradient colors={[MyColors.HORMONE_TOP, MyColors.HORMONE_BOTTOM]} style={{height:'90%', width:'100%', borderRadius:24, paddingHorizontal:12, paddingVertical:12}} start={{x:0, y:0}} end={{x:0, y:1}} >
    <Mag2FlatIndicator currentIndex={currentIndex} totalSteps={fuckData?.stepsData?.length} />

    <View style={{ width:'100%', paddingHorizontal:12, flexDirection:'row', justifyContent:'flex-end', alignItems:'center', height:50}}>
        <TouchableOpacity onPress={()=> router.back()}>
        <AntDesign name="close" size={24} color="grey" />
        </TouchableOpacity>
    </View>


    <MagScreenCardView currentIndex={currentIndex} setCurrentIndex={setCurrentIndex}  cardId={cardId} type={type} starredCardIds={starredCardIds} fuckData={fuckData} />


    </LinearGradient>





  )
}

export default MagScreenBoxView