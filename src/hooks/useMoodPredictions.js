import { doc, getDoc } from "@react-native-firebase/firestore"
import { useQuery } from "@tanstack/react-query"
import { auth, db } from "../services/firebase/firebaseConfig"

export const useMoodPredictions = (weekKey) => {
return useQuery({
    queryKey:['mood-predictions', weekKey],
    queryFn: async () => {
        const res = await getDoc(doc(db, 'users', auth.currentUser.uid, 'mood-predictions', weekKey))
        return res?.exists() ? res?.data() : null
    },
    enabled: !!weekKey
})

}