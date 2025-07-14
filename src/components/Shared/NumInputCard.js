import { View, Text, Dimensions, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { format, set } from 'date-fns'
import DatePicker, {} from 'react-native-date-picker'
import Feather from '@expo/vector-icons/Feather';
import { Menu } from 'react-native-paper';

const NumInputCard = ({primaryText, isSecondaryText, secondaryText, value, setFeildValue, exPrimaryText, exSecondaryText, expandable, numlength=5, startNum=1}) => {
  const [open, setOpen] = useState('')
  const [isExpanded, setIsExpanded] = useState(false)
  return (
    <View style={{width:'100%',paddingHorizontal:4}}>
     
     <View style={{width:'100%', borderRadius:12, backgroundColor:'white', padding:12, gap:18}}>

        <Text style={{fontSize:16, fontWeight:'700'}}>{primaryText}</Text>

        {isSecondaryText && (
            <Text style={{fontSize:14, fontWeight:'400', color:'gray'}}>{secondaryText}</Text>
        )}


        <Menu
        visible={open}
        contentStyle={{width:300, height:400, backgroundColor:'white'}}
        onDismiss={()=>setOpen(false)}
        anchor={
        <TouchableOpacity onPress={()=> setOpen(true)} style={{width:'100%', height:50, flexDirection:'row', borderWidth:1, borderColor:'black', borderRadius:6, justifyContent:'space-between', paddingHorizontal:8, alignItems:'center'}}>
          <Text>{value}</Text>
          <Feather name="chevron-down" size={24} color="black" />
        </TouchableOpacity>
        }
        >
          <ScrollView showsVerticalScrollIndicator={false}>
            {
              [...Array(numlength)].map((item, index)=> (
                <React.Fragment key={index}>
                    <Menu.Item title={index + startNum} onPress={()=> {setFeildValue(index + startNum); setOpen(false)}} />
                </React.Fragment>
              ))
            }
          </ScrollView>

        </Menu>



        {expandable && (
        <TouchableOpacity onPress={()=> setIsExpanded(prev => !prev)} style={{width:'50%'}}>
          <Text>{exPrimaryText}</Text>
        </TouchableOpacity>
        )}


        {
          isExpanded && (
            <View style={{paddingVertical:12, width:'100%'}}>
              <Text>{exSecondaryText}</Text>
              </View>
          )

        }








     </View>

    </View>
  )
}

export default NumInputCard