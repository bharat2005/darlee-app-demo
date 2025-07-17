import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';
import { useStarred } from '../../hooks/useStarred';

const StartButton = ({cardId}) => {
    const {data, error} = useStarred(cardId)

        
  return (
    <TouchableOpacity>
        <AntDesign name= { data ? 'star' : 'staro'} size={24} color={data ? 'orange' : 'gray'} />
    </TouchableOpacity>
  )
}

export default StartButton