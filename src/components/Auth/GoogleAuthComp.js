import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useAuth } from '../../contexts/AuthContextProvider'
import MyColors  from '../../constants/MyColors'
import Google from '../../../assets/svgs/Google'


const GoogleAuthComp = () => {
    const {googleLogin} = useAuth()

  return (
    <View style={{width:'100%', paddingHorizontal:70, height:50}}>
        
        <TouchableOpacity  activeOpacity={0.8} onPress={googleLogin} style={{width:'100%', height:'100%', borderRadius:32, backgroundColor:'white', justifyContent:'center', alignItems:'center', flexDirection:'row', gap:12, elevation:4}}>
           <View style={{backgroundColor:'white', padding:8, borderRadius:'50%', position:'absolute', left:8}}>
           <Google height={24} width={24} fill={MyColors.DARK_GREY} />
           </View>
            <Text style={{color:'black', fontSize:17, fontFamily:'Outfit-Light'}}>Continue with Google</Text>
        </TouchableOpacity>

    </View>
  )
}

export default GoogleAuthComp