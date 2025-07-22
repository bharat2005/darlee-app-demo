import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import OptionsHeader from '../OptionsHeader'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import SubOptionBox from '../SubOption/SubOptionBox';
import ListOptionSelectorList from './ListOptionSelectorList';

const ListOptionSelector = ({data,value, setFieldValue, subValues, setSubFieldValue}) => {
    const [selectedOption, setSelectedOption] = useState(value)

    const handleOption = (option) => {
        const isSelected = selectedOption === option 
        setSelectedOption(isSelected ? '' : option)
        setFieldValue(isSelected ? '' : option)
    }


  return (
    <View style={{width: '100%', paddingHorizontal:12}}>
        <OptionsHeader data={data} />


        <ListOptionSelectorList handleOption={handleOption}  selectedOption={selectedOption} setSelectedOption={setSelectedOption} />



        {
            (selectedOption !== 'None' && selectedOption !== '') && (
               <SubOptionBox data={data} subValues={subValues} setFieldValue={setSubFieldValue} />
            )
        }




    </View>
  )
}

export default ListOptionSelector