
import { useQuery } from "@tanstack/react-query"
import { auth, db } from "../services/firebase/firebaseConfig"

export const useMoodPredictions = (weekKey) => {
return useQuery({
    queryKey:['mood-predictions', weekKey],
    queryFn: async () => {
        if(weekKey === '2025-W30'){
            return {"body": "headache", "condition": "fair", "heart": "exicted", "message": "diarrhea"}
        } else if(weekKey === '2025-W31'){
            return {"body": "stomachAche", "condition": "notGood", "heart": "neat", "message": "diarrhea"}
        } else if(weekKey === '2025-W32'){
            return  {"body": "stomachAche", "condition": "normal", "heart": "yutu"}
        } else if(weekKey === '2025-W33'){
            return {"body": "headache", "condition": "perfect", "heart": "anxity"}
        } else if(weekKey === '2025-W34'){
            return {"body": "headache", "condition": "perfect", "heart": "happy"}
        } else if(weekKey === '2025-W35'){
            return {"body": "headache", "condition": "perfect", "heart": "happy"}
        } else{
            return {"body": "headache", "condition": "perfect", "heart": "happy"}
        } 
        // const res = await getDoc(doc(db, 'users', auth.currentUser.uid, 'mood-predictions', weekKey))
        // return res?.exists() ? res?.data() : null
    },
    //enabled: !!weekKey
})

}