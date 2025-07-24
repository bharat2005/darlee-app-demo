import { collection, doc, getDocs, limit, orderBy, query, setDoc } from "@react-native-firebase/firestore"
import { auth, db } from "../firebase/firebaseConfig"
import { format } from "date-fns"
import axios from "axios"
import { responseCleaner } from "../../utils/responseCleaner"
import Constants from 'expo-constants'  

export const geminiMoodPrediciton = async (weekKey) => {

    try{
        const q = query(collection(db, 'users', auth.currentUser.uid, 'dayLogs'), orderBy('date', 'desc'), limit(7))
        const res = await getDocs(q)

        if(res.empty){
            return {success: true, data: null}
        }

        const listToSend = res.docs.reverse().map(doc => ({
            condition: doc.data().condition,
            heart: doc.data().heart,
            message: doc.data().message,
            body: doc.data().body,
            date: format(doc.data().date.toDate(), 'yyyy-MM-dd')
        }))

        const prompt = `
Given the recent health log entries (each representing one day), predict the likely overall condition, body status, heart state, and message the user may experience for the **week of ${weekKey}**(yyyy-ISOWeek).

Only choose from these categories:

- body: [ 'noComplaints', 'headache', 'stomachAche', 'backPain', 'ovulationPain', 'tired', 'fatigue', 'swelling', 'sleepiness', 'skin', 'appIncrease', 'cold', 'chest', 'nausea', 'dizziness' ]
- condition: [ 'perfect', 'fair', 'normal', 'notGood' ]
- heart: [ 'happy', 'exicted', 'fine', 'neat', 'calm', 'irritation', 'unstable', 'yutu', 'anxity', 'poor', 'ordinary' ]
- message: [ 'constipate', 'diarrhea', 'expressDelivery' ]


❗️Return ONLY a **valid JSON object**, like this (no backticks, no "json", no explanation, no text before or after):

{
  "condition": "normal",
  "body": "stomachAche",
  "heart": "yutu",
  "message": "diarrhea"

}
`.trim();


        const geminiResponnse = await axios.post(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-pro:generateContent?key=${Constants.expoConfig?.extra?.GEMINI_API_KEY}`,
            {
                contents: [
                    {
                        role: 'user',
                        parts: [{text: JSON.stringify(listToSend)}]
                    }
                ],
                systemInstruction: {
                    parts: [{text: prompt}]
                }
            },
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        )

        const cleanedResponse = responseCleaner(geminiResponnse.data.candidates[0].content.parts[0].text)

        await setDoc(doc(db, 'users', auth.currentUser.uid, 'mood-predictions', weekKey), cleanedResponse)

        return {success: true, data: cleanedResponse}

    } catch(error){
        console.log("Error in geminiMoodPrediciton", error)
        console.log("Error response:", error.response?.data)
        return {success: false, data: null}
    }
}