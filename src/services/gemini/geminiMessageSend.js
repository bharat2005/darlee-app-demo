import { addDoc, collection, doc, getDocs, limit, orderBy, query, serverTimestamp } from "@react-native-firebase/firestore"
import { auth, db } from "../firebase/firebaseConfig"
import axios, {} from 'axios'
import Constants from 'expo-constants'

export const geminiMessageSend = async(message) => {
    try{
        const collectionRef = collection(db, 'users', auth?.currentUser?.uid, 'messages')
        await addDoc(collectionRef, {
            role:'user',
            text: message,
            createdAt:serverTimestamp()
        })


        const lastMessagesQuery = query(collection(db, 'users', auth?.currentUser?.uid, 'messages'), orderBy('createdAt', 'desc'), limit(10))
        const lastMessagesRes = await getDocs(lastMessagesQuery)

        const listToSendGemini = lastMessagesRes.docs.reverse().map(doc => {
            let response = '';
            if(doc.data()?.response === 'like') response = 'User liked this response: '
            if(doc.data()?.response === 'dislike') response = 'User disliked this response: '

            return {
                role: doc.data().role,
                parts: [{text: `${response}${doc.data()?.text}`}]
            }
        })


        const geminiRes = await axios.post(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-pro:generateContent?key=${Constants.expoConfig?.extra?.GEMINI_API_KEY}`,
            {
                contents: listToSendGemini,
                systemInstruction:{
                    parts:[{
                        text: `You are a friendly assistant named Sofie. When past messages include notes like "(User liked this message)" or "(User disliked this message)", use that to improve your tone and response style.
                        Be gentle, supportive, and emotionally aware. Avoid repeating styles that were disliked. Respond in a short, warm, casual way.
                    `.trim()
                    }]
                }
            },
            {
                headers: {"Content-Type": 'application/json'}
            }
            
        )


        const geminiReply = geminiRes?.data?.candidates?.[0]?.content?.parts?.[0]?.text




        await addDoc(collectionRef, {
            role:'model',
            text: geminiReply,
            createdAt:serverTimestamp()
        })

        return {success:true}

    } catch(err){
        console.log("Error from geminiMessgeSend funtion", err.message)

        return {success: false}
        
    }

}