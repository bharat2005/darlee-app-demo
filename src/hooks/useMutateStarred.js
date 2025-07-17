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
            await queryClient.cancelQueries(['allStarred'])
            const prevCAtched = queryClient.getQueryData(['allStarred'])

            queryClient.setQueryData(['allStarred'], prev => {
               return isStarred ? prev.filter(item => item?.docId !== id) : [{docId:id, type: type}, ...prev]
            })

            return{
                prevCAtched
            }

        },
        onSuccess: async()=> {
           await queryClient.invalidateQueries(['allStarred'])
            queryClient.invalidateQueries(['starredCards', type])
        },
        onError:(a,b,context)=> {
            queryClient.setQueryData(['allStarred'], context.prevCAtched)
        }
    })
}