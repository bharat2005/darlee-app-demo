import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';
import { useStarred } from '../../hooks/useAllStarred';
import { useMutateStarred } from '../../hooks/useMutateStarred';

const StartButton = ({cardId, type, isStarred}) => {
    const {mutate, error:err} = useMutateStarred(cardId, type)




  return (
    <TouchableOpacity onPress={()=> {mutate({isStarred: isStarred})}}>
        <AntDesign name= { isStarred ? 'star' : 'staro'} size={24} color={isStarred ? 'orange' : 'gray'} />
    </TouchableOpacity>
  )
}

export default StartButton