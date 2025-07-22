import Fontisto from '@expo/vector-icons/Fontisto';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Ionicons from '@expo/vector-icons/Ionicons';
import MyColors from './MyColors';

export default {
    'DuringMensuration': {
        title: 'Physiological',
        miniTitle: 'During Mensuration',
        icon:<FontAwesome6 name="droplet" size={22} color={MyColors.DARK_GREY} />,
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
        icon:<FontAwesome6 name="droplet" size={22} color={MyColors.DARK_GREY} />,
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
        miniTitle: 'Can be',
        icon: <FontAwesome6 name="droplet" size={22} color={MyColors.DARK_GREY} />
    },
    


    
}