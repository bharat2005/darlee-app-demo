import { View, Text, Dimensions } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-paper'

const TextInputCard = ({primaryText, isSecondaryText, secondaryText,value, onChangeText}) => {
  return (
    <View style={{width:'100%',paddingHorizontal:4}}>
     
     <View style={{width:'100%', borderRadius:12, backgroundColor:'white', padding:12, gap:18}}>

        <Text style={{fontSize:16, fontWeight:'700'}}>{primaryText}</Text>

        {isSecondaryText && (
            <Text style={{fontSize:14, fontWeight:'400', color:'gray'}}>{secondaryText}</Text>
        )}


        <TextInput
        mode='outlined'
        maxLength={10}
        value={value}
        onChangeText={onChangeText}
        right={value?.length && <TextInput.Icon icon={'close'} onPress={()=>onChangeText('')} forceTextInputFocus={false} />}
        />

        <View style={{flexDirection:'row-reverse'}}>
            <Text>{value?.length} / 10</Text>
        </View>




     </View>

    </View>
  )
}

export default TextInputCard