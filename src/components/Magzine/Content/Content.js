import { View, Text, Dimensions } from 'react-native'
import React, { useMemo, useState } from 'react'
import SelfCare from './SelfCare'
import HormoneGuide from './HormoneGuide'
import { TabView, SceneMap } from 'react-native-tab-view';
import ContentTabBar from './ContentTabBar';

const Content = ({data}) => {
    const [index, setIndex] = useState(0);
    const [routes, setRoutes] = useState([
  { key: 'selfCare', title: 'Selfcare' },
  { key: 'hormoneGuide', title: 'Hormoneguide' },
])

  const starredCardIds = useMemo(()=> {
    return data?.map(item => item?.docId)
  }, [data])



const renderScene = ({route}) => {
   const props = {type: route.key, starredCardIds}
  switch (route.key){
    case 'selfCare':
      return <SelfCare {...props} />
    case 'hormoneGuide':
      return <HormoneGuide {...props} />
  }
}

  return (
    <View style={{flex:1 , width:'100%'}}>

      
    <ContentTabBar routes={routes}  setIndex={setIndex} index={index}/>
          <TabView
          swipeEnabled={false}
          renderTabBar={()=> null}
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: Dimensions.get('screen').width }}
    />

    </View>
  )
}

export default Content