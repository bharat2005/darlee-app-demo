import { doc, getDoc } from "@react-native-firebase/firestore"
import { useQuery } from "@tanstack/react-query"
import { auth, db } from "../services/firebase/firebaseConfig"

export const useMoodPredictions = (weekKey) => {
return useQuery({
    queryKey:['mood-predictions', weekKey],
    queryFn: async () => {
        if(weekKey === '2025-W30'){
            return {"body": "headache", "condition": "notGood", "heart": "exicted", "message": "diarrhea"}
        } else if(weekKey === '2025-W31'){
            return {"body": "stomachAche", "condition": "notGood", "heart": "unstable", "message": "diarrhea"}
        } else if(weekKey === '2025-W32'){
            return  {"body": "stomachAche", "condition": "normal", "heart": "yutu", "message": "diarrhea"}
        } else if(weekKey === '2025-W33'){
            return {"body": "headache", "condition": "notGood", "heart": "exicted", "message": "diarrhea"}
        } else if(weekKey === '2025-W34'){
            return {"body": "headache", "condition": "normal", "heart": "yute", "message": "diarrhea"}
        } else if(weekKey === '2025-W35'){
            return {"body": "headache", "condition": "notGood", "heart": "unstable", "message": "diarrhea"}
        } else{
            return {"body": "headache", "condition": "normal", "heart": "unstable", "message": "diarrhea"}
        } 
        // const res = await getDoc(doc(db, 'users', auth.currentUser.uid, 'mood-predictions', weekKey))
        // return res?.exists() ? res?.data() : null
    },
    //enabled: !!weekKey
})

}