import { useQuery } from '@tanstack/react-query'
import { doc, getDoc } from '@react-native-firebase/firestore'
import { db } from '../services/firebase/firebaseConfig'


export const useText = (id) => {
    return useQuery({
        queryKey:['agreement',id],
        queryFn:async()=> {
            const res = await getDoc(doc( db, 'textData', id))
            return res.data()?.text || ''
        },
        enabled:!!id
    })
}