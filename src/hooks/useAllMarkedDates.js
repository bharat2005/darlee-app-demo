import { useQuery } from "@tanstack/react-query"
import { collection, getDocs } from "@react-native-firebase/firestore"
import { auth, db } from "../services/firebase/firebaseConfig"

export const useAllMarkedDates = ()=>{
    return useQuery({
        queryKey: ['allMarkedDates'],
        queryFn: async()=>{
            const docRef = collection(db, 'users', auth.currentUser.uid, 'dayLogs')
            const docSnap = await getDocs(docRef)
            return docSnap.docs.map(doc=>doc.id)
        }
    })
}