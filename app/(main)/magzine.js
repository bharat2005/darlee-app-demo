import { View, Text, Dimensions } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TabView } from 'react-native-tab-view'
import Favorite from '../../src/components/Magzine/Favorite/Favorite'
import Content from '../../src/components/Magzine/Content/Content'
import MagzineTabBar from '../../src/components/Magzine/MagzineTabBar'


const Magzines = () => {
  const [index, setIndex] = useState(0)
  const [routes, setRoutes] = useState([
    {title: 'Content', key: 'content'},
    {title: 'Favorite', key: 'fav'},
  ])



  const renderScene = ({route}) => {
    switch (route.key){
      case 'content' :
        return <Content />
      case 'fav':
        return <Favorite />
    }

  }

  return (
    <SafeAreaView style={{flex:1}} edges={['top']}>

      
    <MagzineTabBar routes={routes} index={index} setIndex={setIndex} /> 
    

    <TabView 
    initialLayout={{width:Dimensions.get('screen').width}}
    onIndexChange={setIndex}
    renderTabBar={()=> null}
    renderScene={renderScene}
    navigationState={{index, routes}}
    swipeEnabled={false}
    />

    </SafeAreaView>
  )
}

export default Magzines