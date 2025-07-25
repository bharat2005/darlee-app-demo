import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import DateInputCard from '../Shared/DateInputCard'
import NumInputCard from '../Shared/NumInputCard'
import TextTipsData from '../../constants/TextTipsData'
import TipComp from '../Shared/TipComp'

const Period = ({width, handleBlur, handleChange, handleReset, handleSubmit, touched, errors, values, setFieldValue}) => {
  return (
    <ScrollView style={{flex:1, width, paddingHorizontal:32, paddingTop:4}}>


<View style={{width:'100%'}}>
      <Text style={{fontFamily:'Outfit-Medium', fontSize:17, color:'black', textAlign:'left',}}>{TextTipsData.period.text}</Text>
      </View>
   

    <TipComp text={TextTipsData.period.tip} />


    <View style={{width:'100%', flex:1, gap:18}}>
      <DateInputCard primaryText={'When was your most recent period'} dpTitle={'Period Start Date'} secondaryText={'Start date'} value={values?.recentPeriodDate} setFeildValue={(v)=> setFieldValue('recentPeriodDate', v)} expandable={true} exPrimaryText={'What if you are currently on your periods?'}  exSecondaryText={"Select the date your period started."} />
    
      <NumInputCard primaryText={'How many days does your periods usually lasts?'} isSecondaryText={false} value={values?.periodDaysLength} numlength={15} startNum={1} setFeildValue={(v)=> setFieldValue('periodDaysLength', v)} expandable={false} />

      <NumInputCard primaryText={'How long is your menstrual cycle?'} isSecondaryText={false} value={values?.menstrualCycleLength} numlength={41} startNum={20} setFeildValue={(v)=> setFieldValue('menstrualCycleLength', v)} expandable={true} exPrimaryText={'What is the menstraul cycle?'} exSecondaryText={'It is the number of days from the first day of your period to the first day of your next period'}/>
      </View>

      <View style={{height:100}} />
    </ScrollView>
  )
}

export default Period