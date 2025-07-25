import { useQuery } from "@tanstack/react-query"
import { collection, getDocs } from "@react-native-firebase/firestore"
import { auth, db } from "../services/firebase/firebaseConfig"

const data =  [{"end": "2025-06-29", "endDate": [Object], "phase": "period", "source": "user", "start": "2025-06-22"}, {"end": "2025-07-23", "endDate": [Object], "phase": "period", "source": "user", "start": "2025-07-16"}, {"end": "2025-08-16", "phase": "period", "source": "predictor", "start": "2025-08-09"}, {"end": "2025-08-17", "phase": "follicular", "source": "predictor", "start": "2025-08-17"}, {"end": "2025-08-18", "phase": "ovulation", "source": "predictor", "start": "2025-08-18"}, {"end": "2025-09-01", "phase": "luteal", "source": "predictor", "start": "2025-08-19"}, {"end": "2025-09-09", "phase": "period", "source": "predictor", "start": "2025-09-02"}, {"end": "2025-09-10", "phase": "follicular", "source": "predictor", "start": "2025-09-10"}, {"end": "2025-09-11", "phase": "ovulation", "source": "predictor", "start": "2025-09-11"}, {"end": "2025-09-25", "phase": "luteal", "source": "predictor", "start": "2025-09-12"}]
export const usePeriods = () => {
    return useQuery({
        queryKey: ['periods'],
        queryFn: async () => {
                // const res = await getDocs(collection(db, 'users', auth.currentUser.uid, 'periods'))
                // const periods = res.docs.map(doc => doc.data())
                // return periods || []
                return data
        },
        //enabled: !!auth.currentUser
    })
}