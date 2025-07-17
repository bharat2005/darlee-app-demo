import { collection, getDocs, limit, orderBy, query, startAfter, where } from '@react-native-firebase/firestore'
import { useInfiniteQuery } from '@tanstack/react-query'
import { db } from '../services/firebase/firebaseConfig'

export const useCardList = (type) => {
    return useInfiniteQuery({
        queryKey:['cardList', type],
        queryFn:async({pageParam}) => {
            const q = pageParam ? 
            query(collection(db,'contentData'), where('type', '==', type), orderBy('createdAt', 'asc'), startAfter(pageParam), limit(4))
            :
            query(collection(db,'contentData'), where('type', '==', type), orderBy('createdAt', 'asc'), limit(4))

            const res = await getDocs(q)
            const lastDocRef = res.docs[res.docs?.length - 1]

            return {
                list: res.docs.map(doc => doc.data() ),
                lastDocRef
            }

        },
        getNextPageParam:(lastPage)=> lastPage.lastDocRef,
        enabled: !!type
    })
}