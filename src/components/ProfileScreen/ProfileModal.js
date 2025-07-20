import { View, Text, Modal, TouchableOpacity } from 'react-native'
import React from 'react'
import { auth } from '../../services/firebase/firebaseConfig'
import { router } from 'expo-router'
import { useAuth } from '../../contexts/AuthContextProvider'


const ProfileModal = ({open, setOpen, modalType}) => {
    const {deleteAccount, logout} = useAuth()




    const modalContent = {
        'logout': {
            title: 'Logout',
            description: 'Are you sure you want to logout?',
            onConfirm: async() => {
              await logout()
            }
        },
        'delete': {
            title: 'Delete Account',
            description: 'Are you sure you want to delete your account?',
            onConfirm: async() => {
                await deleteAccount()
            }
        }
    }









  return (
<Modal visible={open} backdropColor={1} animationType='fade'>
    <View style={{marginVertical:'auto',alignSelf:'center', padding:20, backgroundColor:'white', borderRadius:10,  width:300}}>
    <Text style={{fontSize:20, fontWeight:'700', marginBottom:10, textAlign:'center'}}>{modalContent[modalType]?.title}</Text>
    <Text style={{fontSize:16, fontWeight:'400', marginBottom:20, textAlign:'center'}}>{modalContent[modalType]?.description}</Text>
    
    <View style={{width:'100%', paddingHorizontal:12, gap:12}}>
        <TouchableOpacity onPress={()=> setOpen(false)} style={{backgroundColor:'lightgray', justifyContent:'center', alignItems:'center', width:'100%', height:50, borderRadius:12}}>
            <Text style={{color:'black', fontSize:16, fontWeight:'700'}}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={modalContent[modalType]?.onConfirm} style={{backgroundColor:'red', justifyContent:'center', alignItems:'center', width:'100%', height:50, borderRadius:12}}>
            <Text style={{color:'white', fontSize:16, fontWeight:'700'}}>Confirm</Text>
        </TouchableOpacity>
    </View>

    </View>
</Modal>
  )
}

export default ProfileModal