import { collection, doc, getDoc, getDocs } from "@react-native-firebase/firestore"
import { useQuery } from "@tanstack/react-query"
import { auth, db } from "../services/firebase/firebaseConfig"

export const useAllStarred = () =>{
    return useQuery({
        queryKey:['starred'],
        queryFn:async()=> {
            const res = await getDocs(collection(db, 'users', auth?.currentUser?.uid, 'starredCards'))
            return res?.docs?.map(doc => doc.id) || []
        }
    })
}