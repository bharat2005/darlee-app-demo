import { View, Text } from 'react-native'
import React from 'react'
import { Formik } from 'formik'
import { BottomSheetScrollView } from '@gorhom/bottom-sheet'
import ImageOptionSelector from './ImageOptionSeletor/ImageOptionSelector'
import ImageOptionsData from '../../../constants/ImageOptionsData'
import FormikButton from './FormikButton'

const MyFormikView = () => {
  return (
    <Formik
initialValues = {{
        condition: '',
        duringMesuration: {isDuringMensuration: false, pain:'', volumn:''},
        heart:'',
        body:'',
        message: '',
        amountOfDischarge: {amount: 'None', situation:'', color:''},
        abnormalBleeding: false,
        medecine:'',
        temperature:'',
        weight:'',
        time:''
    
    }}
    >
        {
            ({handleSubmit, values, errors, touched, setFieldValue}) => (
                <View style={{flex:1, width:'100%'}}>

                <BottomSheetScrollView style={{width:'100%', height:'100%', padding:12}} showsVerticalScrollIndicator={false} contentContainerStyle={{gap:34}}>
                    <ImageOptionSelector data={ImageOptionsData?.ConditionOption} />
                    <ImageOptionSelector data={ImageOptionsData?.HeartOption} />
                    <ImageOptionSelector data={ImageOptionsData?.BodyOption} />
                    <ImageOptionSelector data={ImageOptionsData?.Messagee} />
                    <ImageOptionSelector data={ImageOptionsData?.Medecine} />
                    <View style={{height:60}} />
                </BottomSheetScrollView>

                <FormikButton />
                </View>
            )
        }
    </Formik>
  )
}

export default MyFormikView