import { View, Text, FlatList, TouchableOpacity, Dimensions } from 'react-native'
import React, { useRef, useState } from 'react'
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context'
import { Formik } from 'formik'
import Name from '../../src/components/ProfileBuild/Name'
import DOB from '../../src/components/ProfileBuild/DOB'
import Period from '../../src/components/ProfileBuild/Period'
import Symptom from '../../src/components/ProfileBuild/Symptoms'
import Interest from '../../src/components/ProfileBuild/Interest'
import Concious from '../../src/components/ProfileBuild/Concious'
import Control from '../../src/components/ProfileBuild/Control'
import End from '../../src/components/ProfileBuild/End'
import NextButton from '../../src/components/ProfileBuild/NextButton'
import { KeyboardAvoidingView } from 'react-native'


const steps = [Name, DOB, Period, Symptom, Interest, Concious, Control, End]

const ProfileBuild = () => {
    const flatListRef = useRef()
    const [currentIndex, setCurrentIndex]= useState(0)


    const handleNextPress = () => {
        if(flatListRef.current && currentIndex <= steps.length - 1){
            flatListRef.current.scrollToIndex({
                index: currentIndex + 1,
                animation:true,
                viewPosition:0.5
            })
        }
    }
  return (


   
    <SafeAreaView style={{ flex:1, width:'100%'}}>
         <KeyboardAvoidingView style={{flex:1}} behavior='height' >

        <Formik
        initialValues={{
          name: "",
          dob: new Date("2005-05-25"),
          recentPeriodDate: new Date(),
          periodDaysLength: 5,
          menstrualCycleLength: 28,
          pmsSymptoms: [],
          healthInterest: null,
          healthConcious: null,
          bodyControl: null,
        }}  
        >
            {
                ({handleBlur, handleChange, handleReset, handleSubmit, touched, errors, values, setFieldValue})=>(
                    <View style={{flex:1, width:'100%'}}>

                        <FlatList
                        ref={flatListRef}
                        pagingEnabled
                        showsHorizontalScrollIndicator={false}
                        horizontal
                        data={steps}
                        scrollEnabled={true}
                        keyExtractor={(item, index)=> index.toString()}
                        renderItem={({item:Step, index})=> <Step width={Dimensions.get('screen').width} {...{handleBlur, handleChange, handleReset, handleSubmit, touched, errors, values, setFieldValue}} />}
                        />


                        <NextButton currentIndex={currentIndex} handleNextPress={handleNextPress} setCurrentIndex={setCurrentIndex} />

                    </View>
                )
            }
        </Formik>


    </KeyboardAvoidingView>
    </SafeAreaView>


  )
}

export default ProfileBuild