import { AntDesign } from "@expo/vector-icons";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MyColors from "./MyColors";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

export default {
    'ConditionOption' : {
    title:'Condition',
    icon:<AntDesign name="smileo" size={22} color={MyColors.DARK_GREY} />,
    options: [
        
        {
            optionName:'perfectly',
            optionId: 'perfect',
            optionImage: ''
        },
                {
            optionName:'fair Enough',
            optionId: 'fair',
            optionImage: ''
        },
                {
            optionName:'normal',
            optionId: 'normal',
            optionImage: ''
        },
                {
            optionName:'not so good',
            optionId: 'notGood',
            optionImage: ''
        },
    ]
},


  'HeartOption' : {
    title:'Heart',
    icon:<AntDesign name="hearto" size={22} color={MyColors.DARK_GREY} />,
    options: [
        
        {
            optionName:'happy',
            optionId: 'happy',
            optionImage: ''
        },
              {
            optionName:'exicted',
            optionId: 'exicted',
            optionImage: ''
        },
              {
            optionName:'fine',
            optionId: 'fine',
            optionImage: ''
        },
              {
            optionName:'neat',
            optionId: 'neat',
            optionImage: ''
        },
              {
            optionName:'calm',
            optionId: 'calm',
            optionImage: ''
        },
              {
            optionName:'irritation',
            optionId: 'irritation',
            optionImage: ''
        },
              {
            optionName:'emotionally unstable',
            optionId: 'unstable',
            optionImage: ''
        },
              {
            optionName:'yuutsu',
            optionId: 'yutu',
            optionImage: ''
        },
              {
            optionName:'anxity',
            optionId: 'anxity',
            optionImage: ''
        },
        {
            optionName:'poor concentration',
            optionId: 'poor',
            optionImage: ''
        },
              {
            optionName:'ordinary',
            optionId: 'ordinary',
            optionImage: ''
        },

    ]
},



  'BodyOption' : {
    title:'Body',
    icon:<MaterialIcons name="cyclone" size={24} color={MyColors.DARK_GREY} />,
    options: [
        
        {
            optionName:'no complaints',
            optionId: 'noComplaints',
            optionImage: ''
        },
              {
            optionName:'headeache',
            optionId: 'headache',
            optionImage: ''
        },
              {
            optionName:'stomach ache',
            optionId: 'stomachAche',
            optionImage: ''
        },
              {
            optionName:'lowerback pain',
            optionId: 'backPain',
            optionImage: ''
        },
              {
            optionName:'ovulation pain',
            optionId: 'ovulationPain',
            optionImage: ''
        },
              {
            optionName:'tired',
            optionId: 'tired',
            optionImage: ''
        },
              {
            optionName:'fatigue',
            optionId: 'fatigue',
            optionImage: ''
        },
              {
            optionName:'swelling',
            optionId: 'swelling',
            optionImage: ''
        },
              {
            optionName:'sleepiness',
            optionId: 'sleepiness',
            optionImage: ''
        },
        {
            optionName:'rough skin',
            optionId: 'skin',
            optionImage: ''
        },
              {
            optionName:'appetite increase',
            optionId: 'appIncrease',
            optionImage: ''
        },
                      {
            optionName:'cold',
            optionId: 'cold',
            optionImage: ''
        },
        {
            optionName:'chest swelling',
            optionId: 'chest',
            optionImage: ''
        },
              {
            optionName:'nausea',
            optionId: 'nausea',
            optionImage: ''
        },
        {
            optionName:'dizziness',
            optionId: 'dizziness',
            optionImage: ''
        },
        

    ]
},



  'Messagee' : {
    title:'Message',
    icon:<FontAwesome6 name="poop" size={20} color={MyColors.DARK_GREY} />   ,
    options: [
        
        {
            optionName:'constipate',
            optionId: 'constipate',
            optionImage: ''
        },
              {
            optionName:'diarrhea',
            optionId: 'diarrhea',
            optionImage: ''
        },
              {
            optionName:'express',
            optionId: 'expressDelivery',
            optionImage: ''
        },
        

    ]
},


  'Medecine' : {
    title:'Medecine',
    icon: <MaterialCommunityIcons name="pill" size={22} color={MyColors.DARK_GREY} />,
    options: [
        
        {
            optionName:'pills',
            optionId: 'pills',
            optionImage: ''
        },
              {
            optionName:'painkillers',
            optionId: 'painKillers',
            optionImage: ''
        },
              {
            optionName:'suppliments',
            optionId: 'supplients',
            optionImage: ''
        },
        

    ]
},









}