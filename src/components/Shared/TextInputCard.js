import { View, Text, Dimensions } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-paper'
import MyColors from '../../constants/MyColors'

const TextInputCard = ({primaryText, isSecondaryText, secondaryText,value, onChangeText, placeholder}) => {
  return (
    <View style={{width:'100%',paddingHorizontal:4}}>
     
     <View style={{width:'100%', borderRadius:24, backgroundColor:'white', padding:14, gap:18}}>

        <Text style={{fontSize:16, fontFamily:'Outfit-Medium'}}>{primaryText}{" "}
          <Text style={{fontSize:14, color:'red', fontFamily:'Outfit-Light'}}>Required*</Text>
        </Text>

        {isSecondaryText && (
            <Text style={{fontSize:14, fontWeight:'400', color:'gray'}}>{secondaryText}</Text>
        )}


        <TextInput
        mode='outlined'
        maxLength={10}
        placeholder={placeholder}
        theme={{colors:{primary:MyColors.PRIMARY, outline:'pink'}}}
        value={value}
        onChangeText={onChangeText}
        right={value?.length && <TextInput.Icon color={MyColors.PRIMARY} icon={'close'} onPress={()=>onChangeText('')} forceTextInputFocus={false} />}
        />

        <View style={{flexDirection:'row-reverse'}}>
            <Text style={{fontSize:12, color:'black', fontFamily:'Outfit-Light'}}>{value?.length} / 10</Text>
        </View>




     </View>

    </View>
  )
}

export default TextInputCard