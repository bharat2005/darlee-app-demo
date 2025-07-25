import { View, Text, SectionList, TouchableOpacity } from 'react-native'
import React, { useCallback, useRef, useState } from 'react'
import { AntDesign, Ionicons, MaterialIcons } from '@expo/vector-icons'
import { router, useFocusEffect } from 'expo-router'
import ProfileModal from './ProfileModal'
import MyColors from '../../constants/MyColors'




const MySectionList = ({user}) => {
    const [modalType, setModalType] = useState(null)
    const [open, setOpen] = useState(false)

    const navigationRef = useRef(false)

    useFocusEffect(
        useCallback(()=> {
            navigationRef.current = false
        })
    )


    const sectionListData =  [
        {
            title:'Account',
            data: [
                {
                    label: 'Proifle',
                    icon:<Ionicons name='person' size={24} color='gray' />,
                        onPress:()=>{
                        if(navigationRef.current) return
                        navigationRef.current = true
                        router.push('/profileDetail')
                    }
                },
                {
                    label: 'UserId',
                    icon:<AntDesign name="idcard" size={22} color="gray" />,
                    info:true,
                    text:user?.uid
                },
    
            ]
        },
        {
            title:'App Stores',
            data: [
                {
                    label: 'Terms',
                    icon:<Ionicons name='document-text' size={24} color='gray' />,
                    onPress:()=>{
                        if(navigationRef.current) return
                        navigationRef.current = true
                        router.push({pathname:'/TPScreen', params:{id: 'terms'}})
                    }
                },
                {
                    label: 'Privacy Procily',
                    icon:<MaterialIcons name="privacy-tip" size={22} color="gray" />,
                    onPress:()=>{
                    if(navigationRef.current) return
                    navigationRef.current = true
                    router.push({pathname:'/TPScreen', params:{id: 'privacy'}})
                   }
                },
    
            ]
        },
                {
            title:'Login',
            data: [
                {
                    label: 'Logout',
                    icon:<MaterialIcons name="logout" size={22} color="gray" />,
                    danger: true,
                    onPress:()=> {
                      setModalType('logout')
                      setOpen(true)
                    }
                 
                },
                {
                    label: 'Delete Account',
                    icon:<Ionicons name='trash' size={22} color='gray' />,
                    danger:true,
                    onPress:()=>{
                      setModalType('delete')
                      setOpen(true)
                    }
                  
                },
    
            ]
        },
    ]



const renderHeader = ({section}) => (
    <View style={{height:50, backgroundColor:'white', width:'100%', flexDirection:'row', alignItems:'center', paddingHorizontal:12}}>
        <Text style={{fontSize:16, fontFamily:'Outfit-Medium', color:MyColors.DARK_BLUE}}>{section.title}</Text>
    </View>
)


const renderItem = ({item}) => (
    <TouchableOpacity activeOpacity={0.7} onPress={item?.onPress} style={{height:50, backgroundColor:'white', width:'100%', flexDirection:'row', alignItems:'center', paddingHorizontal:12, justifyContent:'space-between'}}>
        
        <View style={{flexDirection:'row', alignItems:'center', gap:12}}>
       {item?.icon}
        <Text style={{fontSize:14, fontFamily:'Outfit-Light', color:item?.danger ? 'red' : 'black'}}>{item.label}</Text>
        </View>

        {item.onPress && <Ionicons name="chevron-forward" size={22} color="gray" />}
        {item.info && <Text style={{fontSize:14, fontFamily:'Outfit-Light', color:'gray'}}>{item.text}</Text>}
    </TouchableOpacity>
)




  return (
    <View style={{flex:1, backgroundColor:'white', paddingHorizontal:12}}>
      
      <SectionList
      renderSectionFooter={()=> <View style={{height:1, backgroundColor:'lightgray', width:'100%'}}/>}
      sections={sectionListData}
      ListFooterComponent={<View style={{height:100, backgroundColor:'white', width:'100%', justifyContent:'center', alignItems:'center'}}><Text style={{fontSize:14, fontFamily:'Outfit-Light', color:'gray'}}>Version 1.0.0</Text></View>}
      renderSectionHeader={renderHeader}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
      />


      <ProfileModal open={open} setOpen={setOpen} modalType={modalType} />

    </View>
  )
}

export default MySectionList