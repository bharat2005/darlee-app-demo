import { View, Text } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'
import MyColors from '../../../constants/MyColors'

const FormikButton = ({handleSubmit, isSubmitting}) => {
  return (
    <View style={{width:'100%', height:54, position:'absolute', bottom:0, left:0, right:0, paddingHorizontal:18, paddingVertical:4, backgroundColor:'white'}}>
        <Button
        labelStyle={{fontSize:16, fontFamily:'Outfit-Medium', color:'white'}}
        theme={{roundness:2}}
        loading={isSubmitting}
        disabled={isSubmitting}
       mode='contained' 
       style={{width:'100%', height:'100%', backgroundColor: isSubmitting ? 'lightgray' : MyColors.DARK_GREY}} 
       contentStyle={{height:'100%'}} 
       onPress={handleSubmit} 
       >
            Save
        </Button>
    </View>
  )
}

export default FormikButton