import { View, Text } from 'react-native'
import React from 'react'
import OptionsHeader from '../OptionsHeader'
import ImageOptionList from './ImageOptionList'
import { MaterialIcons } from '@expo/vector-icons'



const ImageOptionSelector = ({data}) => {
  return (
    <View style={{width: '100%'}}>

      <OptionsHeader data={data} />

      <ImageOptionList data={data} />
        
    </View>
  )
}

export default ImageOptionSelector