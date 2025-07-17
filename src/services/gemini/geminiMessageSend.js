import { addDoc, collection, getDocs, limit, orderBy, query, serverTimestamp } from "@react-native-firebase/firestore"
import { auth, db } from "../firebase/firebaseConfig"

export const geminiMessageSend = async(message) => {
    try{

        await addDoc(collection(db, 'users', auth?.currentUser?.uid, 'messages'), {
            role:'user',
            text: message,
            createdAt:serverTimestamp()
        })


        const lastMessagesQuery = query(collection(db, 'users', auth?.currentUser?.uid, 'messages', orderBy('createdAt', 'desc'), limit(10)))
        const lastMessagesRes = getDocs(lastMessagesQuery)

        const listToSendGemini = lastMessagesRes.docs.map(doc => {
            let response = '';
            if(doc.data()?.response === 'liked') response = 'User liked this message: '
            if(doc.data()?.response === 'disliked') response = 'User disliked this message: '

            return {
                role: doc.data().role,
                parts: [{text: `${response}${doc.data()?.text}`}]
            }
        })


        const geminiReply = 


    } catch(err){
        console.log("Error from geminiMessgeSend funtion", err.message)
    }

}