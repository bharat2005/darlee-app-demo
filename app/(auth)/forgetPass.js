import { View, Text, TouchableWithoutFeedback, Keyboard } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Formik, validateYupSchema } from 'formik'
import * as Yup from 'yup'

const ForgetPassowrd = () => {
    validation = Yup.object({
        email : Yup.string().required('Required*').email("Should be a valid email")
    })

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <SafeAreaView style={{flex:1, width:'100%'}}>

        <Formik>
            {
                ({})=> (
                    <React.Fragment>

                        
                    </React.Fragment>
                )
            }
        </Formik>

        
     
    </SafeAreaView>
        </TouchableWithoutFeedback>
  )
}

export default ForgetPassowrd