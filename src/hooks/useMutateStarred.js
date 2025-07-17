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
              await setDoc(docRef, {
                    createdAt:serverTimestamp(),
                    type: type
                })
            }
        },
        onMutate:async({isStarred})=> {
            await queryClient.cancelQueries(['starred', id])
            const prevCAtched = queryClient.getQueryData(['starred', id])

            queryClient.setQueryData(['starred', id], prev => !prev)

            return{
                prevCAtched
            }

        },
        onSuccess: ()=> {
            queryClient.invalidateQueries(['starred', id])
        },
        onError:(a,b,context)=> {
            queryClient.setQueryData(['starred', id], context.prevCAtched)
        }
    })
}