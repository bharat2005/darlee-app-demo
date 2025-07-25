
import { useInfiniteQuery, useQuery } from "@tanstack/react-query"
import { db } from "../services/firebase/firebaseConfig"

const data1 = [{"createdAt": new Date(), "docId": "OLIxJpkqPWzdMOhtF90o", "id": "sleep", "image": require('../../assets/images/sleep.png'), "titleText": "Increase blood flow to your brain"}]

const data2 = [{"createdAt": new Date(), "docId": "xpUdCC0j8Akm2JOPltWg", "id": "femaleHormone", "image": require('../../assets/images/hormone.png'), "titleText": "Mechanism of female hormone secretion"}]
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