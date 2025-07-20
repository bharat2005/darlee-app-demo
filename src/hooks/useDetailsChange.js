import { doc, updateDoc } from "@react-native-firebase/firestore"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { db, auth } from "../services/firebase/firebaseConfig"


export const useDetailsChange = () => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: async ({id, data}) => {
            await updateDoc(doc(db, 'users', auth.currentUser.uid), {
                [id]: data
            })
        },
        onSuccess: () => {
            queryClient.invalidateQueries(['currentUser', auth.currentUser?.uid])
        }
    })
}