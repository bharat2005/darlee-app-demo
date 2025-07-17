import { doc, getDoc } from "@react-native-firebase/firestore"
import { useQuery } from "@tanstack/react-query"
import { auth, db } from "../services/firebase/firebaseConfig"

export const useStarred = (id) =>{
    return useQuery({
        queryKey:['starred', id],
        queryFn:async()=> {
            const res = await getDoc(doc(db, 'users', auth?.currentUser?.uid, 'starredCards', id))
            return res.exists() || false
        },
        enabled: !!id
    })
}