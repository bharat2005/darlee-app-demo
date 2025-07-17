import { doc, getDoc } from "@react-native-firebase/firestore"
import { useQuery } from "@tanstack/react-query"
import { db } from "../services/firebase/firebaseConfig"

export const useStarredCards = (cardsIds, type) => {
    return useQuery({
        queryKey:['starredCards', type],
        queryFn:async()=>{
            
            const res = await Promise.all(cardsIds.map(async(id)=> {
                const docRef = doc(db, 'cards', id)
                const res = await getDoc(docRef)
                return {...res?.data(), docId: res.id} || {}
            }))

            return res || []
        },
        enabled: !!cardsIds && !!type
    })
}