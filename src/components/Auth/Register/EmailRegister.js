import { View, Text, TouchableWithoutFeedback, Keyboard } from 'react-native'
import React from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { Button, HelperText, TextInput } from 'react-native-paper'
import { useAuth } from '../../../contexts/AuthContextProvider'

const EmailRegister = () => {
    const {emailRegister} = useAuth()
    const validation =  Yup.object({
        email: Yup.string().required('Email is Required*').email("Should be a valid email"),
        password: Yup.string().required('Password is Required').min(6, "Char should be atlest 6")
    })

    const handleRegisterFormik = async(values)=> {
        await emailRegister(values?.email, values?.password)
    }
  return (


    <View style={{padding:18}}>

        <Formik 
        initialValues={{email: '', password: ''}}
        validationSchema={validation}
        onSubmit={handleRegisterFormik}
        validateOnMount
        >

            {
                ({handleBlur, handleChange, handleReset, handleSubmit,  touched, errors, values, isSubmitting, isValid})=> (
                    <React.Fragment>

                        <TextInput 
                        placeholder='email'
                        mode='outlined'
                        onBlur={handleBlur('email')}
                        onChangeText={handleChange('email')}
                        value={values.email}
                        error={!!errors.email && touched.email === true}
                        />
                        <HelperText style={{color:'red'}} visible={!!errors.email && touched.email === true}>
                            {errors?.email}
                        </HelperText>

                        
                        <TextInput 
                        secureTextEntry
                        placeholder='password'
                        mode='outlined'
                        onBlur={handleBlur('password')}
                        onChangeText={handleChange('password')}
                        value={values.password}
                        error={!!errors.password && touched.password === true}
                        />
                        <HelperText style={{color:'red'}} visible={!!errors.password && touched.password === true}>
                            {errors?.password}
                        </HelperText>


                        <Button mode='contained' loading={isSubmitting} disabled={isSubmitting || !isValid } onPress={handleSubmit}>
                            Register
                        </Button>


                    </React.Fragment>

                )
            }

        </Formik>

    </View>

  )
}

export default EmailRegister