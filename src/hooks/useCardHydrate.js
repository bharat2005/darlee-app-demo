import { useQuery } from "@tanstack/react-query"
import { db } from "../services/firebase/firebaseConfig"
import { doc, getDoc } from "@react-native-firebase/firestore"
export const useCardHydrate = (id) => {
    return useQuery({
        queryKey: ['card', id],
        queryFn:async()=> {
            const docRef = doc(db, 'cardsMetaData', id) 
            const res = await getDoc(docRef)

            return res.data() || {}

        },
        enabled :!!id
    })
}