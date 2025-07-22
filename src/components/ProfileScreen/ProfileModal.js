import { View, Text, Modal, TouchableOpacity } from 'react-native'
import React from 'react'
import { auth } from '../../services/firebase/firebaseConfig'
import { router } from 'expo-router'
import { useAuth } from '../../contexts/AuthContextProvider'


const ProfileModal = ({open, setOpen, modalType}) => {
    const { logout, deleteAccount} = useAuth()




    const modalContent = {
        'logout': {
            title: 'Logout',
            description: 'Are you sure you want to logout? You will be logged out of your account and you will need to login again to use the app.',
            onConfirm: async() => {
              await logout()
            },
            buttonText: 'Logout'
        },
        'delete': {
            title: 'Account Deletion',
            description: 'If you delete your account, you will lose all your data and you will not be able to recover it. Are you sure you want to delete your account?',
            onConfirm: async() => {
                await deleteAccount()
            },
            buttonText: 'Delete Account'
        }
    }









  return (
<Modal visible={open} backdropColor={1} animationType='fade'>
    <View style={{marginVertical:'auto',alignSelf:'center', padding:20, paddingVertical:30, backgroundColor:'white', borderRadius:18,  width:320}}>
    <Text style={{fontSize:20, fontFamily:'Outfit-Medium', marginBottom:10, textAlign:'center'}}>{modalContent[modalType]?.title}</Text>
    <Text style={{fontSize:16, fontFamily:'Outfit-Light', marginBottom:20, textAlign:'center', color:'gray', marginVertical:12, lineHeight:24}}>{modalContent[modalType]?.description}</Text>
    
    <View style={{width:'100%', paddingHorizontal:12, gap:12}}>
        <TouchableOpacity activeOpacity={0.7} onPress={()=> setOpen(false)} style={{backgroundColor:'lightgray', justifyContent:'center', alignItems:'center', width:'100%', height:50, borderRadius:12}}>
            <Text style={{color:'black', fontSize:16, fontFamily:'Outfit-Medium'}}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7} onPress={modalContent[modalType]?.onConfirm} style={{backgroundColor:'red', justifyContent:'center', alignItems:'center', width:'100%', height:50, borderRadius:12}}>
            <Text style={{color:'white', fontSize:16, fontFamily:'Outfit-Medium'}}>{modalContent[modalType]?.buttonText}</Text>
        </TouchableOpacity>
    </View>

    </View>
</Modal>
  )
}

export default ProfileModal