import { View, Text } from 'react-native'
import React from 'react'
import DateInputCard from '../Shared/DateInputCard'
import NumInputCard from '../Shared/NumInputCard'

const Period = ({width, handleBlur, handleChange, handleReset, handleSubmit, touched, errors, values, setFieldValue}) => {
  return (
    <View style={{flex:1, width, backgroundColor:'plum'}}>

      <DateInputCard primaryText={'When was ur most recent period'} secondaryText={'start date'} value={values?.recentPeriodDate} setFeildValue={(v)=> setFieldValue('recentPeriodDate', v)} expandable={true} exPrimaryText={'What is its alreay period?'}  exSecondaryText={"no worr about it! its totally fine, okay?"} />
    
      <NumInputCard primaryText={'How many days does your periods usually lasts?'} isSecondaryText={false} value={values?.periodDaysLength} numlength={15} startNum={1} setFeildValue={(v)=> setFieldValue('periodDaysLength', v)} expandable={false} />

      <NumInputCard primaryText={'How long is ur menstrul cycle?'} isSecondaryText={false} value={values?.menstrualCycleLength} numlength={41} startNum={20} setFeildValue={(v)=> setFieldValue('menstrualCycleLength', v)} expandable={true} exPrimaryText={'What is the menstraul cycle?'} exSecondaryText={'its justt normal part of femal human ligfe'}/>

    </View>
  )
}

export default Period