import axios from "axios"
import { db, auth } from "../firebase/firebaseConfig"
import { responseCleaner } from "../../utils/responseCleaner"
import Constants from 'expo-constants'  

import { query, collection, where, getDocs, orderBy, limit, writeBatch, doc } from "@react-native-firebase/firestore"
import { format } from "date-fns"

export const geminiPeriodPrediction = async () => {
    try{
        const  q  = query(collection(db, 'users', auth.currentUser.uid, 'periods'), where('source', '==', 'user'), orderBy('endDate', 'desc'), limit(3))

        const res = await getDocs(q)

        if(res.empty) return

        const periods = res.docs.reverse().map(doc => ({start: doc.data().start, end: doc.data().end, phase: 'period'}))

        const prompt = `
        You are a menstrual cycle assistant. 
        Based on the last 3 user-recorded menstrual periods I’ll provide below (with 'start' and 'end' dates), 
        predict the next **two full menstrual cycles** relative to todays date ${format(new Date(), 'yyyy-MM-dd')}, including the following phases:
        
        - period
        - follicular
        - ovulation
        - luteal
        
        Return the result as a **JSON array of objects**. Each object must include:
        - start (in yyyy-MM-dd)
        - end (in yyyy-MM-dd)
        - phase (one of: "period", "follicular", "ovulation", "luteal")
        
        Make sure there are **no gaps between phases** and the sequence is medically plausible.
        Avoid extra text – return only a JSON array. Example:
        
        [
          { "start": "2025-07-10", "end": "2025-07-14", "phase": "period", "source": "predictor" },
          { "start": "2025-07-15", "end": "2025-07-19", "phase": "follicular", "source": "predictor" },
          ...
        ]
        `.trim()

        const geminiResponse = await axios.post(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-pro:generateContent?key=${Constants.expoConfig?.extra?.GEMINI_API_KEY}`,
            {
                contents: [
                    {
                        role: 'user',
                        parts: [{text: JSON.stringify(periods)}]
                        
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

        const cleanedResponse = responseCleaner(geminiResponse?.data?.candidates[0].content.parts[0].text, true)

        const batch = writeBatch(db)

        cleanedResponse.forEach(period => {
            const docRef = doc(db, 'users', auth.currentUser.uid, 'periods', `${period.start}-${period.end}`)
            batch.set(docRef,{
                ...period,
                source: 'predictor',
            } )
        })

        await batch.commit()
    } catch(error){
        console.log("Error in geminiPeriodPrediction", error)
        console.log("Error response:", error.response?.data)
    }
}