import { useQuery } from "@tanstack/react-query"
import { db } from "../services/firebase/firebaseConfig"
import { doc, getDoc } from "@react-native-firebase/firestore"

const data =   {"description": "Explore how estrogen and cortisol changes might influence tightness in the neck and shoulder area.", "docId": "OLIxJpkqPWzdMOhtF90o", "stepsData": [{"boxImage": "https://firebasestorage.googleapis.com/v0/b/darlee-b47c4.firebasestorage.app/o/images%2FScreenshot_2025-07-23-02-51-24-88.png?alt=media&token=be048fae-1119-4b43-890f-8ae02d8d393e", "primaryText": "Increase blood flow to your brain, and wake you up", "time": 5}, {"boxImage": "https://firebasestorage.googleapis.com/v0/b/darlee-b47c4.firebasestorage.app/o/images%2FScreenshot_2025-07-23-02-51-47-64.png?alt=media&token=bd5da453-7e63-4495-a395-bb19d8cb947a", "primaryText": "Delivers oxygen to your brain and improves concentration", "secondaryText": "When blood flow to the brain is poor, the supply of oxygen dicreases, and the brain decideds that it needs to rest. As a result, you may not be able to concentrate or feel sleepy during the day. By relaxing the area just below the \"mastoid process\" behind your ears, you can increase blood flow to the brain."}, {"boxImage": "https://firebasestorage.googleapis.com/v0/b/darlee-b47c4.firebasestorage.app/o/images%2FScreenshot_2025-07-23-02-52-04-52.png?alt=media&token=24a8cdfb-453c-4aaa-a703-6ea0773b3663", "primaryText": "Rest your elbows on the desk", "secondaryText": "Sit on a chair, rest your right elbow on the desk, and bring your right hand next to your left ear.", "step": 1}, {"boxImage": "https://firebasestorage.googleapis.com/v0/b/darlee-b47c4.firebasestorage.app/o/images%2FScreenshot_2025-07-23-02-52-25-74.png?alt=media&token=d9ba7cf1-29b7-4197-a36a-dc848c86b893", "primaryText": "Press below the mastoid process", "secondaryText": "Press the area jsut below your ear (mastoid process) with your index and middle fingers, and tilt your head to the side, resting the weight of your head on your fingers,", "step": 2}, {"boxImage": "https://firebasestorage.googleapis.com/v0/b/darlee-b47c4.firebasestorage.app/o/images%2FIMG_20250723_025326.png?alt=media&token=a1e88d1c-23fb-4b2e-986b-a836467a4c2e", "primaryText": "Take a deep breath", "secondaryText": "Take three deep breaths in this position, then repeat on the left side. If you are feeling sleepy and unable to concentrate, try doing this about once every 30 minutes.", "step": 3}]}
export const useCardHydrate = (id) => {
    return useQuery({
        queryKey: ['card', id],
        queryFn:async()=> {
            return data
            // const docRef = doc(db, 'cardsMetaData', id) 
            // const res = await getDoc(docRef)

            // return res.data() || {}

        },
     //   enabled :!!id
    })
}