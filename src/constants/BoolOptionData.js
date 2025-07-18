import Fontisto from '@expo/vector-icons/Fontisto';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Ionicons from '@expo/vector-icons/Ionicons';

export default {
    'DuringMensuration': {
        title: 'During Mensuration',
        icon:<Fontisto name="blood-drop" size={24} color="black" />,
        subTitle: 'If you have menstrual bleeding, please select your condition',
        options: [
            {
                title: 'Menstrual Pain',
                id:'menstrualPain',
                subOptions: [
                    'None',
                    'It hurts a little',
                    'It hurts',
                    'Severe pain'
                ]
            },
                     {
                title: 'Menstrual Blood Volumn',
                id:'menstrualVolume',
                subOptions: [
                    'Few',
                    'Somewhat else',
                    'Ordinary',
                    'Slightly More'
                ]
            }
        ]
    },


    'VaginalDischarge': {
        title: 'Amount of Vaginal Discharge',
        bigOptions : ['None', 'Few', 'Ordinary', 'Many'],
        icon: <Fontisto name="blood-drop" size={24} color="black" />,
        subTitle: 'Please select the condition of your discharge',
        options: [
            {
                title: 'Situation',
                id:'vaginalDischargeSituation',
                subOptions: [
                    'Sticky',
                    'Creampy',
                    'Thickness',
                    'Poroporo'
                ]
            },
                     {
                title: 'Color',
                id:'vaginalDischargeColor',
                subOptions: [
                    'Transparent',
                    'White',
                    'Yellow',
                    'Pink',
                    'Brown',
                ]
            }
        ]
    },

    'AbnormalBleeding': {
        title: 'Abnormal Bleeding',
        icon: <Fontisto name="blood-drop" size={24} color="black" />
    },
    


    
}