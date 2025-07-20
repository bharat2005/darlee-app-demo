import { useQuery } from "@tanstack/react-query"
import {auth, db} from '../services/firebase/firebaseConfig'
import { doc, getDoc } from "@react-native-firebase/firestore"

export const useCurrentUser = () => {
    return useQuery({
        queryKey: ['currentUser', auth.currentUser?.uid],
        queryFn: async () => {
            const res = await getDoc(doc(db, 'users', auth.currentUser?.uid))
            return res.data() || {}
        },
        enabled: !!auth.currentUser?.uid
    })
}