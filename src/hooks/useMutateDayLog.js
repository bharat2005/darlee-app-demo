import { useMutation, useQueryClient } from "@tanstack/react-query"
import { doc, setDoc } from "@react-native-firebase/firestore"
import { auth, db } from "../services/firebase/firebaseConfig"


export const useMutateDayLog = (date) =>{
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: async ({dayLogData}) => {
            const docRef = doc(db, 'users', auth.currentUser.uid, 'dayLogs', date)
            await setDoc(docRef, {...dayLogData}, {merge: true})
        },
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ['dayLog', date]})
            queryClient.invalidateQueries({queryKey: ['allMarkedDates']})
        }
    })  
}