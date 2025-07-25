import { View, Text, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Formik, validateYupSchema } from 'formik'
import * as Yup from 'yup'
import { Button, HelperText, TextInput } from 'react-native-paper'
import { useAuth } from '../../src/contexts/AuthContextProvider'
import { router } from 'expo-router'

const ForgetPassowrd = () => {
    const {forgetPass} = useAuth()
    const validation = Yup.object({
        email : Yup.string().required('Required*').email("Should be a valid email")
    })


    const handleForgetFormik = async(values) => {

        const res = await forgetPass(values.email)
        if(res?.success) {
            Alert.alert("Email Sent", "We have sent an link to your emial, kindly reset password form there!",[
                {text: 'Ok', onPress:()=> router.back()}
            ])
        } else{
            Alert.alert("Error", res?.error)
        }
    }


  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <SafeAreaView style={{flex:1, width:'100%'}}>

        <View style={{padding:19}}>


        <Formik
        initialValues={{email:''}}
        validationSchema={validation}
        onSubmit={handleForgetFormik}
        validateOnMount
        >
            {
                ({handleBlur, handleChange, touched, errors, values, isSubmitting, isValid, handleSubmit})=> (
                    <React.Fragment>

                        <TextInput
                        mode='outlined'
                        onBlur={handleBlur('email')}
                        onChangeText={handleChange('email')}
                        error={!!errors.email && touched.email === true}
                        value={values.email}
                        />
                        <HelperText visible={!!errors.email && touched.email === true} style={{color:'red'}}>
                            {errors?.email}
                        </HelperText>


                        <Button onPress={()=> {}} loading={isSubmitting} disabled={isSubmitting || !isValid} mode='contained'>
                            Send
                        </Button>

                    </React.Fragment>
                )
            }
        </Formik>

                </View>

        
     
    </SafeAreaView>
        </TouchableWithoutFeedback>
  )
}

export default ForgetPassowrd