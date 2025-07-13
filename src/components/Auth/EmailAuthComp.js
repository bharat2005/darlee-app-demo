import { View, Text, TouchableWithoutFeedback, Keyboard, TouchableOpacity } from 'react-native'
import React from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { Button, HelperText, TextInput } from 'react-native-paper'
import { useAuth } from '../../contexts/AuthContextProvider'
import { router } from 'expo-router'

const EmailAuthComp = ({origin}) => {
    const {emailRegister, emailLogin} = useAuth()
    
    const validation =  Yup.object({
        email: Yup.string().required('Email is Required*').email("Should be a valid email"),
        password: Yup.string().required('Password is Required').min(6, "Char should be atlest 6")
    })

    const handleFormik = async(values)=> {
        if(origin === 'login'){
        await emailLogin(values?.email, values?.password)
        } else{
        await emailRegister(values?.email, values?.password)
        }
    }
  return (


    <View style={{padding:18}}>

        <Formik 
        initialValues={{email: '', password: ''}}
        validationSchema={validation}
        onSubmit={handleFormik}
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
                            {origin === 'login' ? 'Login' : 'Register'}
                        </Button>


                        {
                            origin === 'login' && (
                                <TouchableOpacity style={{width:'100%'}} onPress={()=> router.push('/forgetPass')}>
                                    <Text style={{textAlign:'center'}}>Forget Password?</Text>
                                </TouchableOpacity>
                            )
                        }


                    </React.Fragment>

                )
            }

        </Formik>

    </View>

  )
}

export default EmailAuthComp