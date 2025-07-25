import { useQuery } from "@tanstack/react-query"
import { auth, db } from '../services/firebase/firebaseConfig'

export const useDayLog = (date) => {
    return useQuery({
        queryKey: ['dayLog', date],
        queryFn: async () => {
            // const docRef = doc(db,'users', auth.currentUser.uid, 'dayLogs', date)
            // const docSnap = await getDoc(docRef)
            // return docSnap.data() || null
            return null
        },
        enabled: !!date,
        
    })  
}