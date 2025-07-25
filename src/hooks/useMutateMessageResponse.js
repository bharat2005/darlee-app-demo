import { useMutation } from "@tanstack/react-query"

import { auth, db } from "../services/firebase/firebaseConfig"
import { useQueryClient } from "@tanstack/react-query"

export const useMutateMessageResponse = (messageId) =>{
    const queryClient = useQueryClient()

     return useMutation({
        mutationFn: async({currentResponse, pastResponse}) => {
            // const docRef = doc(db, 'users', auth.currentUser.uid, 'messages', messageId)
            // await updateDoc(docRef, {response: currentResponse === pastResponse ? null : currentResponse})
        },
        onSuccess: () => {
           // queryClient.invalidateQueries({queryKey: ['message-response', messageId]})
        },
        onMutate:async({currentResponse, pastResponse})=>{
            await queryClient.cancelQueries({queryKey: ['message-response', messageId]})
            const previousData = queryClient.getQueryData(['message-response', messageId])
            queryClient.setQueryData(['message-response', messageId], prev => {
                return (currentResponse === pastResponse) ? null : currentResponse
            })
            return {previousData}
        },
        onError: (error, variables, context) => {
          //  queryClient.setQueryData(['message-response', messageId], context.previousData) 
        }
    })

}