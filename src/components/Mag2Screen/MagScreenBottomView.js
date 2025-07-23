import { View, Text } from 'react-native'
import React from 'react'
import StartButton from '../Shared/StartButton'
import { Button } from 'react-native-paper'
import { router } from 'expo-router'

const MagScreenBottomView = ({cardId, type, isStarred, fuckData}) => {
  return (
    <View style={{flex:1, width:'100%', flexDirection:'row', justifyContent:'center', alignItems:'center'}}>

        <View style={{position:'absolute', bottom:0, top:0, right:0,justifyContent:'center', alignItems:'center', paddingHorizontal:20}}>
            <StartButton size={30} isStarred={isStarred} type={type} cardId={cardId} />
        </View>


        <Button 
        onPress={()=> router.back()}
        labelStyle={{fontSize:16, fontFamily:'Outfit-Medium', color:'white'}}
        theme={{roundness:2}}
        style={{width:'70%', height:44, backgroundColor:'red'}} contentStyle={{height:44}}
        >
        Close
        </Button>
     
    </View>
  )
}

export default MagScreenBottomView