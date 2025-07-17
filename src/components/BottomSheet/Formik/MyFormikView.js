import { View, Text } from 'react-native'
import React from 'react'
import { Formik } from 'formik'
import { BottomSheetScrollView } from '@gorhom/bottom-sheet'
import ImageOptionSelector from './ImageOptionSeletor/ImageOptionSelector'

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
                <BottomSheetScrollView style={{width:'100%', height:'100%', padding:12}}>
                    <ImageOptionSelector />
                </BottomSheetScrollView>
            )
        }
    </Formik>
  )
}

export default MyFormikView