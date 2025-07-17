import { collection, doc, getDoc, getDocs } from "@react-native-firebase/firestore"
import { useQuery } from "@tanstack/react-query"
import { auth, db } from "../services/firebase/firebaseConfig"

export const useAllStarred = (options={}) =>{
    return useQuery({
        queryKey:['allStarred'],
        queryFn:async()=> {
            const res = await getDocs(collection(db, 'users', auth?.currentUser?.uid, 'starredCards'))
            return res?.docs?.map(doc => ({docId: doc.id, ...doc.data()})) || []
        },
        ...options
    })
}