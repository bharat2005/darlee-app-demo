import { View, Text } from 'react-native'
import React from 'react'
import OptionsHeader from '../OptionsHeader'
import { HelperText, TextInput } from 'react-native-paper'
import MyColors from '../../../../constants/MyColors'

const FeildOptionSelector = ({data, value, handleChange, handleBlur, error, touched}) => {
  return (
    <View style={{width: '100%'}}>
        
      <OptionsHeader data={data} />

<View style={{flexDirection:'row', alignItems:'center', paddingHorizontal:24, marginTop:12}}>


    <TextInput
        mode='outlined'
        theme={{colors:{primary:MyColors.PRIMARY}}}
        value={value}
        maxLength={5}
        placeholder='00.00'
        onBlur={handleBlur}
        right={ value.trim() ? <TextInput.Icon icon={'close'} forceTextInputFocus={false} onPress={()=> handleChange('')} /> : null}
        style={{width:140, backgroundColor:'rgba(0, 0, 0, 0.05)'}}
        onChangeText={handleChange}
        keyboardType={'number-pad'}
        error={touched === true && !!error}
        />


    <Text style={{fontSize:16, fontFamily:'Outfit-Medium', marginLeft:12, textAlign:'center', color:MyColors.DARK_GREY}}>{data?.unit}</Text>
</View>
<HelperText type='error' visible={touched === true && !!error}>
        {error}
  </HelperText>
        
    </View>
  )
}

export default FeildOptionSelector