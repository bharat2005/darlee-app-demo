import { useMutation, useQueryClient } from "@tanstack/react-query"
import { doc, setDoc } from "@react-native-firebase/firestore"
import { auth, db } from "../services/firebase/firebaseConfig"
import { getDay, parseISO } from "date-fns"


export const useMutateDayLog = (date, weekDays) =>{
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: async ({dayLogData}) => {
            const docRef = doc(db, 'users', auth.currentUser.uid, 'dayLogs', date)
            await setDoc(docRef, {...dayLogData}, {merge: true})
        },
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ['dayLog', date]})
            if(weekDays.length > 0) {
                queryClient.invalidateQueries({queryKey: ['records', weekDays]})
            } else {
                queryClient.invalidateQueries({queryKey: ['allMarkedDates']})
            }
        }
    })  
}