import { View, Text } from 'react-native'
import React from 'react'
import OptionsHeader from '../OptionsHeader'
import ImageOptionList from './ImageOptionList'
import { MaterialIcons } from '@expo/vector-icons'

const data = {
  icon: <MaterialIcons name="emoji-emotions" size={24} color="black" />,
  title: 'Image Option Selector',
  options: [
    {name: 'Option 1', image: ''},
    {name: 'Option 2', image: ''},
    {name: 'Option 3', image: ''},
    {name: 'Option 4', image: ''},
    {name: 'Option 5', image: ''},
    {name: 'Option 6', image: ''},
    {name: 'Option 7', image: ''},
    {name: 'Option 8', image: ''},  
  ]
}

const ImageOptionSelector = () => {
  return (
    <View style={{width: '100%'}}>

      <OptionsHeader data={data} />

      <ImageOptionList data={data} />
        
    </View>
  )
}

export default ImageOptionSelector