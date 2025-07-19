import { useQuery } from "@tanstack/react-query"
import { collection, getDocs } from "@react-native-firebase/firestore"
import { auth, db } from "../services/firebase/firebaseConfig"


export const usePeriods = () => {
    return useQuery({
        queryKey: ['periods'],
        queryFn: async () => {
            const res = await getDocs(collection(db, 'users', auth.currentUser.uid, 'periods'))
            const periods = res.docs.map(doc => doc.data())
            return periods || []
        },
        enabled: !!auth.currentUser
    })
}