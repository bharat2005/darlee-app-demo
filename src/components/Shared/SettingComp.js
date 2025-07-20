import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'

const SettingComp = ({secondaryTitle, renderContent, onPress}) => {
  return (
    <View style={{width:'100%', backgroundColor:'white', paddingHorizontal:12, paddingVertical:16}}>
      <Text style={{fontSize:16, fontWeight:'400', color:'gray'}}>{secondaryTitle}</Text>

      {renderContent}

    <Button onPress={onPress} mode='contained' style={{width:'100%', marginTop:12, height:50}} contentStyle={{height:50}}>
        Save Changes
    </Button>

    </View>
  )
}

export default SettingComp