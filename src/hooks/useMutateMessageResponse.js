import { useMutation } from "@tanstack/react-query"
import { doc, updateDoc } from "firebase/firestore"
import { auth, db } from "../services/firebase/firebaseConfig"

export const useMutateMessageResponse = (messageId) =>{
     return useMutation({
        mutationFn: async({currentResponse, pastResponse}) => {
            const docRef = doc(db, 'users', auth.currentUser.uid, 'messages', messageId)
            await updateDoc(docRef, {response: currentResponse === pastResponse ? null : currentResponse})
        }
    })

}