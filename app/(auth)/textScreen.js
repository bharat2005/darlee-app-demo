import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { router, useLocalSearchParams } from 'expo-router'
import { useText } from '../../src/hooks/useText'
import { Button } from 'react-native-paper'
import { agreementStore } from '../../src/stores/aggrementStore'
import { FlatList } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import  MyColors  from '../../src/constants/MyColors'

const TextScreen = () => {
    const {id} = useLocalSearchParams()
    const {data:textData, error} = useText(id)
    const markTerms = agreementStore(state  => state.markTerms)
    const markPrivacy = agreementStore(state  => state.markPrivacy)

    const insets = useSafeAreaInsets()

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
    <SafeAreaView style={{flex:1, justifyContent:'center', alignItems:'center'}}>
     
     <View style={{flex:1, width:'100%', backgroundColor:'#FDF6E8', paddingTop:12}}>
     <FlatList 
    ListHeaderComponent={<View style={{height:30, backgroundColor:'white', borderTopRightRadius:34, borderTopLeftRadius:34}}/>}
    data={textData || []}
    showsVerticalScrollIndicator={false}
    renderItem={renderItem}
    keyExtractor={(item, index)=> index.toString()}
    />

     </View>


{
  textData && (
      <View style={{height:80, backgroundColor:'rgb(224, 223, 223)', width:'100%', paddingHorizontal:18, paddingVertical:12, flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>

      <Text style={{fontSize:14, fontWeight:'400', lineHeight:34, fontFamily:'Outfit-Light', color:'black'}}>Please Check the {id === 'terms' ? '"Terms of Use"' : '"Privacy Policy"'}</Text>

        <Button mode='contained' 
        style={{backgroundColor:MyColors.DARK_GREY}}
        labelStyle={{ fontWeight:'400',  fontFamily:'Outfit-Light', color:'white'}}
        theme={{roundness:2}}
        onPress={()=> {
          id === 'terms' ? markTerms(true) : markPrivacy(true)
          router.back()
        }}>
          Read
        </Button>

      </View>

  )
}
     

    </SafeAreaView>
  )
}

export default TextScreen