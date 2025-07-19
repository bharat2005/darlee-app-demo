import { useMutation, useQueryClient } from "@tanstack/react-query"
import { db, auth } from '../services/firebase/firebaseConfig'
import { writeBatch, getDocs, collection, doc, Timestamp } from "@react-native-firebase/firestore"
import { parseISO } from "date-fns"

export const useMutatePeriod = () =>{
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: async ({periods}) => {
            const batch = writeBatch(db)
             const res = await getDocs(collection(db, 'users', auth.currentUser.uid, 'periods'))
             
             res.docs.forEach(doc => {
                batch.delete(doc.ref)
             })

             const filteredPeriods = periods.filter(period => period.source === 'user')

             filteredPeriods.forEach(period => {
                const docRef = doc(db, 'users', auth.currentUser.uid, 'periods', `${period.start}-${period.end}`)
                batch.set(docRef, {
                    ...period,
                    endDate: Timestamp.fromDate(parseISO(period.end))
                })
             })

             await batch.commit()
        },
        onSuccess: () => {
            queryClient.invalidateQueries(['periods'])
        }
    })
}