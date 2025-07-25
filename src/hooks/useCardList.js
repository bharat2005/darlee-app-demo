import { collection, getDocs, limit, orderBy, query, startAfter, where } from '@react-native-firebase/firestore'
import { useInfiniteQuery, useQueries, useQuery } from '@tanstack/react-query'
import { db } from '../services/firebase/firebaseConfig'

const data = [{"createdAt": 9, "id": "sleep", "title": "When you can't sleep", "type": "selfCare"}]

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

            return data


        },
       // getNextPageParam:(lastPage)=> lastPage.lastDocRef,
     //   enabled: !!type
    })
}