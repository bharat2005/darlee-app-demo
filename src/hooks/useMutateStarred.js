import { deleteDoc, doc, serverTimestamp, setDoc } from "@react-native-firebase/firestore"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { auth, db } from "../services/firebase/firebaseConfig"

export const useMutateStarred = (id, type) => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn:async({isStarred})=> {
            const docRef = doc(db, 'users', auth?.currentUser?.uid, 'starredCards', id)
            if(isStarred){
                await deleteDoc(docRef)
            } else {
                setDoc(docRef, {
                    createdAt:serverTimestamp(),
                    type: type
                })
            }
        },
        onSuccess: ()=> {
            queryClient.invalidateQueries(['starred', id])
        }
    })
}