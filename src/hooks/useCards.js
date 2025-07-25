import { collection, getDoc, getDocs, limit, orderBy, query, startAfter, where } from "@react-native-firebase/firestore"
import { useInfiniteQuery, useQuery } from "@tanstack/react-query"
import { db } from "../services/firebase/firebaseConfig"

const data1 = [{"createdAt": new Date(), "docId": "OLIxJpkqPWzdMOhtF90o", "id": "sleep", "image": "https://firebasestorage.googleapis.com/v0/b/darlee-b47c4.firebasestorage.app/o/images%2FScreenshot_2025-07-22-22-04-06-11.png?alt=media&token=b0f2082d-ab33-4b0f-ad17-72039115a77c", "titleText": "Increase blood flow to your brain"}]

const data2 = [{"createdAt": new Date(), "docId": "xpUdCC0j8Akm2JOPltWg", "id": "femaleHormone", "image": "https://firebasestorage.googleapis.com/v0/b/darlee-b47c4.firebasestorage.app/o/images%2FScreenshot_2025-07-22-22-32-44-38.png?alt=media&token=d87ebeca-5f5f-4ecb-bfd4-0281349f6e1d", "titleText": "Mechanism of female hormone secretion"}]
export const useCards = (id) => {
    return useQuery({
        queryKey:['cards', id],
        queryFn:async({})=> {
            // const q = pageParam ? 
            // query(collection(db,'cards'), where('id', '==', id), orderBy('createdAt', 'desc'), startAfter(pageParam), limit(4))
            // :
            // query(collection(db,'cards'), where('id', '==', id), orderBy('createdAt', 'desc'), limit(4))

            // const res = await getDocs(q)
            // const lastDocRef = res.docs[res?.docs?.length - 1]
            if(id === 'sleep'){
                return data1
            } else {
                return data2
            }
        },
        // getNextPageParam:(lastPage) => lastPage.lastDocRef,
        // enabled: !!id
    })
}