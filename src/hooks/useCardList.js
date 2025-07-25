
import { useInfiniteQuery, useQueries, useQuery } from '@tanstack/react-query'
import { db } from '../services/firebase/firebaseConfig'

const data1 = [{"createdAt": 9, "id": "sleep", "title": "When you can't sleep", "type": "selfCare"}]
const data2 = [{"createdAt": 1, "id": "femaleHormone", "title": "About Female Hormones", "type": "hormoneGuide"}]

export const useCardList = (type) => {
    return useQuery({
        queryKey:['cardList', type],
        queryFn:async({}) => {
            // const q = pageParam ? 
            // query(collection(db,'contentData'), where('type', '==', type), orderBy('createdAt', 'asc'), startAfter(pageParam), limit(4))
            // :
            // query(collection(db,'contentData'), where('type', '==', type), orderBy('createdAt', 'asc'), limit(4))

            // const res = await getDocs(q)
            // const lastDocRef = res.docs[res.docs?.length - 1]

            if(type === 'selfCare'){
                return data1
            } else {
                return data2
            }

            return []


        },
       // getNextPageParam:(lastPage)=> lastPage.lastDocRef,
     //   enabled: !!type
    })
}