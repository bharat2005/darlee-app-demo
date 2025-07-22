import { View, Text, Pressable, Image } from 'react-native'
import React from 'react'
import { router } from 'expo-router'
import StartButton from './StartButton'
import { LinearGradient } from 'expo-linear-gradient'
import MyColors from '../../constants/MyColors'

const colors = {
  selfCare: ['white', MyColors.SELF_CARE_BOTTOM],
  hormoneGuide: [MyColors.HORMONE_TOP, MyColors.HORMONE_BOTTOM],
}

const Card = ({cardData, type, isStarred}) => {
 
  return (
        <View style={{height:'100%', width:160, paddingHorizontal:4}}>
            <LinearGradient colors={colors[type]} style={{height:'100%', width:'100%', borderRadius:8, position:'absolute', top:0, left:0, right:0, bottom:0, zIndex:-1}} start={{x:0, y:0}} end={{x:0, y:1}} />
    

            <Pressable onPress={()=> router.push({pathname:'/magScreen', params: {cardId: cardData?.docId, type}})} style={{height:'100%', width:'100%', borderRadius:8, padding:12}}>
            
            
              <Text style={{color:'rgb(36, 36, 36)', fontSize:15, fontFamily:'Outfit-Medium'}}>{cardData?.titleText}</Text>
            
            
            
              {
              cardData?.image && (
                <Image source={{uri: cardData?.image}} style={{width:'100%', height:100, position:'absolute', left:0, right:0, bottom:0}} />
              )
            }

            
            </Pressable>

            <View style={{position:'absolute', bottom:18, right:18, zIndex:1}}>

              <StartButton isStarred={isStarred} type={type} cardId={cardData?.docId} />

            </View>


        </View>
  )
}

export default Card