import { View, Text, TouchableWithoutFeedback, Pressable } from 'react-native'
import React from 'react'
import { router } from 'expo-router'
import MagCardDataView from './MagCardDataView'
const MagScreenCardView = ({currentIndex, setCurrentIndex, localData}) => {

    
  return (
<View style={{flex:1, width:'100%'}}>

    <Pressable style={{position:'absolute', top:0, left:0, height:'100%', width:'50%', backgroundColor:'transparent', zIndex:1000}} onPress={()=> {
        if(currentIndex > 0) {
            setCurrentIndex(currentIndex - 1)
        } else {
            router.back()
        }
    }}/>

    <Pressable style={{position:'absolute', top:0, right:0, height:'100%', width:'50%', backgroundColor:'transparent', zIndex:1000}} onPress={()=> {
        if(currentIndex < localData?.length - 1) {
            setCurrentIndex(currentIndex + 1)
        } else {
            router.back()
        }
    }} />


<MagCardDataView localData={localData} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} />

</View>


)
}

export default MagScreenCardView