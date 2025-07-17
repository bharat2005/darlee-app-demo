import { View, Text, Dimensions } from 'react-native'
import React, { useMemo, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TabView } from 'react-native-tab-view'
import Favorite from '../../src/components/Magzine/Favorite/Favorite'
import Content from '../../src/components/Magzine/Content/Content'
import MagzineTabBar from '../../src/components/Magzine/MagzineTabBar'
import { useAllStarred } from '../../src/hooks/useAllStarred'


const Magzines = () => {
  const [index, setIndex] = useState(0)
  const [routes, setRoutes] = useState([
    {title: 'Content', key: 'content'},
    {title: 'Favorite', key: 'fav'},
  ])
  const {data = [], error} = useAllStarred()





  const renderScene = ({route}) => {
    const props = {data}
    switch (route.key){
      case 'content' :
        return <Content  {...props} />
      case 'fav':
        return <Favorite {...props} />
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