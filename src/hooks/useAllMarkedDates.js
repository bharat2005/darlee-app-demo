import { useQuery } from "@tanstack/react-query"

import { auth, db } from "../services/firebase/firebaseConfig"

export const useAllMarkedDates = ()=>{
    return useQuery({
        queryKey: ['allMarkedDates'],
        queryFn: async()=>{
            // const docRef = collection(db, 'users', auth.currentUser.uid, 'dayLogs')
            // const docSnap = await getDocs(docRef)
            // return docSnap.docs.map(doc=>doc.id)
        }
    })
}