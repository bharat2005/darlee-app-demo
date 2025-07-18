import { View, Text } from 'react-native'
import React from 'react'
import { Formik } from 'formik'
import { BottomSheetScrollView } from '@gorhom/bottom-sheet'
import ImageOptionSelector from './ImageOptionSeletor/ImageOptionSelector'
import ImageOptionsData from '../../../constants/ImageOptionsData'
import FormikButton from './FormikButton'
import BoolOptionSelector from './BoolOptionSelector/BoolOptionSelector'
import BoolOptionData from '../../../constants/BoolOptionData'
import ListOptionSelector from './ListOptionSelector.js/ListOptionSelector'

const MyFormikView = () => {
  return (
    <Formik
    onSubmit={(values) => {
        console.log(values)
    }}
initialValues = {{
        condition: '',
        isDuringMensuration: false,
        menstrualPain: '',
        menstrualVolume: '',
        heart:'',
        body:'',
        message: '',
        vaginalDischargeAmount:'None',
        vaginalDischargeSituation:'',
        vaginalDischargeColor:'',
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

                    <ImageOptionSelector data={ImageOptionsData?.ConditionOption} value={values?.condition} setFieldValue={(v)=> setFieldValue('condition', v)} />
                    <BoolOptionSelector 
                    data={BoolOptionData?.DuringMensuration} 
                    subValues={{menstrualPain:values?.menstrualPain, menstrualVolume:values?.menstrualVolume}} 
                    setFieldValue={(v)=> {
                        setFieldValue('isDuringMensuration', v)
                        if(!v){
                            setFieldValue('menstrualPain', '')
                            setFieldValue('menstrualVolume', '')
                        }
                    }
                    } 
                    value={values?.isDuringMensuration} 
                    setSubFieldValue = {setFieldValue}
                    nested={true}
                    />
                    <ImageOptionSelector data={ImageOptionsData?.HeartOption} value={values?.heart} setFieldValue={(v)=> setFieldValue('heart', v)} />
                    <ImageOptionSelector data={ImageOptionsData?.BodyOption} value={values?.body} setFieldValue={(v)=> setFieldValue('body', v)} />
                    <ImageOptionSelector data={ImageOptionsData?.Messagee} value={values?.message} setFieldValue={(v)=> setFieldValue('message', v)} />
                    <BoolOptionSelector data={BoolOptionData?.AbnormalBleeding} setFieldValue={(v)=> setFieldValue('abnormalBleeding', v)} value={values?.abnormalBleeding} />
                    <ImageOptionSelector data={ImageOptionsData?.Medecine} value={values?.medecine} setFieldValue={(v)=> setFieldValue('medecine', v)} />
                    <ListOptionSelector 
                    data={BoolOptionData?.VaginalDischarge}
                    setFieldValue={(v)=> {
                        setFieldValue('vaginalDischargeAmount', v)
                        if(v === 'None'){
                            setFieldValue('vaginalDischargeSituation', '')
                            setFieldValue('vaginalDischargeColor', '')
                        }
                    }}
                    subValues={{vaginalDischargeSituation:values?.vaginalDischargeSituation, vaginalDischargeColor:values?.vaginalDischargeColor}}
                    setSubFieldValue={setFieldValue}
                    />

                    
                   
                    <View style={{height:120}} />

                </BottomSheetScrollView>

                <FormikButton handleSubmit={handleSubmit} />
                </View>
            )
        }
    </Formik>
  )
}

export default MyFormikView