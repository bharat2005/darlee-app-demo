import { View, Text, FlatList, ActivityIndicator, TouchableOpacity } from 'react-native'
import React, { useRef } from 'react'
import ChatMessageItem from './ChatMessageItem'
import { useAnimatedScrollHandler, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'
import Animated from 'react-native-reanimated'
import LottieView from 'lottie-react-native'
import MyColors from '../../constants/MyColors'
import { Ionicons } from '@expo/vector-icons'

const ChatList = ({messagesList=[], loading}) => {
  const scrollValue = useSharedValue(0)
  const flatListRef = useRef(null)

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event)=>{
      if(event.contentOffset.y > 100){
        scrollValue.value = withTiming(1, {duration: 200})
      }else{
        scrollValue.value = withTiming(0, {duration: 200})
      } 
    }
  })

  const animatedStyle = useAnimatedStyle(()=>{

      return {
        opacity: scrollValue.value,
        transform: [{scale: scrollValue.value}]

}})

const scrollToBottom = () => {
  if(flatListRef.current){
    flatListRef.current.scrollToIndex({index: 0, animated: true})
  }
}

  

  return (
    <View style={{flex:1, width:'100%', backgroundColor:'rgb(247, 247, 247)'}}>

        <Animated.FlatList
        ref={flatListRef}
        inverted
        onScroll={scrollHandler}
        contentContainerStyle={{paddingVertical:12}}
        ListHeaderComponent={ loading && (
        <View style={{flexDirection:'row', width:'100%', height:48, paddingHorizontal:2}}>
          <LottieView source={require('../../../assets/lottie/loading.json')} autoPlay loop style={{width:110, height:55}} />
        </View>
        )}
        data={messagesList}
        keyExtractor={(item, index)=> index.toString()}
        renderItem={({item,index})=> <ChatMessageItem item={item} />}
        />

        <Animated.View style={[{position:'absolute', bottom:18, right:18, justifyContent:'center', alignItems:'center'}, animatedStyle]}>
          <TouchableOpacity activeOpacity={0.8} onPress={scrollToBottom} style={{  height:48,width:48, justifyContent:'center', alignItems:'center', backgroundColor:MyColors.DARK_BLUE, borderRadius:30}}>
            <Ionicons name="arrow-down" size={22} color="white" />
          </TouchableOpacity>
        </Animated.View>

    </View>
  )
}

export default ChatList