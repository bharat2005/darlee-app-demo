import { useQuery } from "@tanstack/react-query"
import { auth, db } from "../services/firebase/firebaseConfig"

export const useMessageResponse = (messageId) => {
    return useQuery({
        queryKey: ['message-response', messageId],
        queryFn: async() => {
            // const res = await getDoc(doc(db, 'users', auth.currentUser.uid, 'messages', messageId))
            // return res.data()?.response || null
            return null
        }
    })
}