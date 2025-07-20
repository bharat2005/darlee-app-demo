import { View, Text, SectionList, TouchableOpacity } from 'react-native'
import React, { useCallback, useRef, useState } from 'react'
import { Ionicons } from '@expo/vector-icons'
import { router, useFocusEffect } from 'expo-router'
import ProfileModal from './ProfileModal'




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
                    icon:'person',
                        onPress:()=>{
                        if(navigationRef.current) return
                        navigationRef.current = true
                        router.push('/profileDetail')
                    }
                },
                {
                    label: 'UserId',
                    icon:'person',
                    info:true,
                    text:user?.uid?.slice(0,17)
                },
    
            ]
        },
        {
            title:'App Stores',
            data: [
                {
                    label: 'Terms',
                    icon:'document-text',
                    onPress:()=>{
                        if(navigationRef.current) return
                        navigationRef.current = true
                        router.push({pathname:'/TPScreen', params:{id: 'terms'}})
                    }
                },
                {
                    label: 'Privacy Procily',
                    icon:'document-text',
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
                    icon:'log-out',
                    danger: true,
                    onPress:()=> {
                      setModalType('logout')
                      setOpen(true)
                    }
                 
                },
                {
                    label: 'Delete Account',
                    icon:'trash',
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
        <Text style={{fontSize:16, fontWeight:'400'}}>{section.title}</Text>
    </View>
)


const renderItem = ({item}) => (
    <TouchableOpacity onPress={item?.onPress} style={{height:50, backgroundColor:'white', width:'100%', flexDirection:'row', alignItems:'center', paddingHorizontal:12, justifyContent:'space-between'}}>
        
        <View style={{flexDirection:'row', alignItems:'center', gap:12}}>
        <Ionicons name={item.icon} size={24} color="gray" />
        <Text style={{fontSize:14, fontWeight:'300', color:item?.danger ? 'red' : 'black'}}>{item.label}</Text>
        </View>

        {item.onPress && <Ionicons name="chevron-forward" size={24} color="gray" />}
        {item.info && <Text style={{fontSize:14, fontWeight:'300', color:'gray'}}>{item.text}</Text>}
    </TouchableOpacity>
)




  return (
    <View style={{flex:1, backgroundColor:'white', paddingHorizontal:12}}>
      
      <SectionList
      renderSectionFooter={()=> <View style={{height:1, backgroundColor:'lightgray', width:'100%'}}/>}
      sections={sectionListData}
      renderSectionHeader={renderHeader}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
      />


      <ProfileModal open={open} setOpen={setOpen} modalType={modalType} />

    </View>
  )
}

export default MySectionList