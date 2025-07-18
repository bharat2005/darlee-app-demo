import { View, Text, KeyboardAvoidingView, Platform } from 'react-native'
import React from 'react'
import { Formik } from 'formik'
import { BottomSheetScrollView } from '@gorhom/bottom-sheet'
import ImageOptionSelector from './ImageOptionSeletor/ImageOptionSelector'
import ImageOptionsData from '../../../constants/ImageOptionsData'
import FormikButton from './FormikButton'
import BoolOptionSelector from './BoolOptionSelector/BoolOptionSelector'
import BoolOptionData from '../../../constants/BoolOptionData'
import ListOptionSelector from './ListOptionSelector/ListOptionSelector'
import FeildOptionSelector from './FeildOptionSelector/FeildOptionSelector'
import FeildOptionsData from '../../../constants/FeildOptionsData'
import * as Yup from 'yup'

const MyFormikView = () => {
    const validation = Yup.object({
        temperature: Yup.number().min(35, 'Tempereaturen should be between 35.00 and 41.00').max(41, 'Tempereaturen should be between 35.00 and 41.00'),
        weight: Yup.number().min(20, 'Weifght should be between 20.00 and 199.99').max(199, 'Weifght should be between 20.00 and 199.99'),
        time:  Yup.number().min(0, 'Time should be between 00.00 and 24.00').max(24, 'Time should be between 00.00 and 24.00'),
    })

    const handleFormikSubmit = (values) => {
        console.log(values)
    }

  return (
    <Formik
    onSubmit={handleFormikSubmit}
    validationSchema={validation}
initialValues = {{
        condition: '',
        isDuringMensuration: false,
        menstrualPain: '',
        menstrualVolume: '',
        heart:'',
        body:'',
        message: '',
        vaginalDischargeAmount:'',
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
            ({handleSubmit, values, errors, touched, setFieldValue, handleChange, handleBlur, }) => (
                <KeyboardAvoidingView style={{flex:1, width:'100%'}} behavior={Platform.OS === 'ios' ? 'padding' : 'height'} keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 60}>

                    

                <BottomSheetScrollView  style={{width:'100%', height:'100%', padding:12}} showsVerticalScrollIndicator={false} contentContainerStyle={{gap:38}}>

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
                    value={values?.vaginalDischargeAmount}
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

                    <FeildOptionSelector 
                    data={FeildOptionsData?.Temperature} 
                    handleChange={handleChange('temperature')}
                    handleBlur={handleBlur('temperature')}
                    value={values?.temperature}
                    error={errors?.temperature}
                    touched={touched?.temperature}
                    />

                    <FeildOptionSelector 
                    data={FeildOptionsData?.Weight} 
                    handleChange={handleChange('weight')}
                    handleBlur={handleBlur('weight')}
                    value={values?.weight}
                    error={errors?.weight}
                    touched={touched?.weight}
                    />

                    <FeildOptionSelector 
                    data={FeildOptionsData?.Time} 
                    handleChange={handleChange('time')}
                    handleBlur={handleBlur('time')}
                    value={values?.time}
                    error={errors?.time}
                    touched={touched?.time}
                    />


                   
                    <View style={{height:40}} />

                </BottomSheetScrollView>

                <FormikButton handleSubmit={handleSubmit} />
                </KeyboardAvoidingView>
            )
        }
    </Formik>
  )
}

export default MyFormikView