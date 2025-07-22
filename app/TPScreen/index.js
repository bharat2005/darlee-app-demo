import { View, Text, ScrollView, FlatList } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useLocalSearchParams } from 'expo-router'
import { useText } from '../../src/hooks/useText'
import TPScreenHeader from '../../src/components/TPScreen/TPScreenHeader'
import ScreenHeader from '../../src/components/Shared/ScreenHeader'

const TPScreen = () => {
    const {id} = useLocalSearchParams()
    const {data: textData} = useText(id)


    const renderItem = ({item})=> {
      return (
        <View style={{width:'100%', paddingHorizontal :20, paddingVertical:12, backgroundColor:'white'}}>
          <View style={{marginVertical:12}}>
          <Text style={{fontSize:22,  fontFamily:'KaiseiDecol-Bold', color:'rgb(34, 34, 34)'}}>{item.title}</Text>
          </View>
        
          <Text style={{fontSize:16, fontWeight:'400', lineHeight:34, fontFamily:'Outfit-Light', color:'rgb(87, 87, 87)'}}>{item.text}</Text>
        </View>
      )
     }
  

  return (
    <SafeAreaView style={{flex:1}}>
    <ScreenHeader title={id === 'terms' ? 'Terms & Conditions' : 'Privacy Policy'} />
    <View style={{flex:1, width:'100%'}}>
     <FlatList
    //ListHeaderComponent={<View style={{height:30, backgroundColor:'white', borderTopRightRadius:34, borderTopLeftRadius:34}}/>}
    data={textData || []}
    showsVerticalScrollIndicator={false}
    renderItem={renderItem}
    keyExtractor={(item, index)=> index.toString()}
    />

     </View>
    </SafeAreaView>
  )
}

export default TPScreen