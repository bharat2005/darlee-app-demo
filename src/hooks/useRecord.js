import { doc, getDoc, writeBatch } from "@react-native-firebase/firestore"
import { useQuery } from "@tanstack/react-query"
import { db } from "../services/firebase/firebaseConfig"
import { auth } from "../services/firebase/firebaseConfig"


export const useRecords = (weekDays, options={}) => {
  return  useQuery({
        queryKey:['records',weekDays],
        queryFn:async()=>{


                return [...Array(7).fill(null)]
            
            
            // return await Promise.all(weekDays.map(async(dateString, index)=> {
            //     const res = await getDoc(doc(db, 'users', auth.currentUser.uid ,'dayLogs', dateString))   
            //     return res?.exists() ? {...res.data(), docId:res.id} : null
            // }))

        },
     //   enabled: weekDays.length > 0,
        ...options
    })
}