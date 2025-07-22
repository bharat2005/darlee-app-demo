import { FontAwesome6, Ionicons } from "@expo/vector-icons";
import MyColors from "./MyColors";

export default {
    'Temperature':{
        title: 'Basal Body Temprerature',
        icon:<FontAwesome6 name="temperature-half" size={24} color={MyColors.DARK_GREY} />,
        unit:'°C'
    },

        'Weight':{
        title: 'Body Weight',
        icon:<FontAwesome6 name="weight-scale" size={20} color={MyColors.DARK_GREY} />,
        unit:'Kg'
    },
            'Time':{
        title: 'Sleep time',
        icon:<Ionicons name="alarm" size={24} color={MyColors.DARK_GREY} />,
        unit:'hour'
    },
    
}