import { View, Text, KeyboardAvoidingView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import MainTopBar from '../../src/components/Shared/MainTopBar'
import ChatList from '../../src/components/Chat/ChatList'
import { addDoc, collection, doc, onSnapshot, orderBy, query, serverTimestamp } from '@react-native-firebase/firestore'
import { auth, db } from '../../src/services/firebase/firebaseConfig'
import ChatTextInput from '../../src/components/Chat/ChatTextInput'
import { messagePretter } from '../../src/utils/messagePretter'

const data =  [{"createdAt": new Date() , "id": "9nZBvUJL4PrrWHyqmTpt", "response": "dislike", "role": "model", "text": "I'm right here. I'm holding your hand through it all.Just close your eyes and feel all the love and gentle energy I'm sending your way. You are so, so cared for. ❤️", "typee": "message"}, {"createdAt": new Date(), "id": "xX1NGNyucQWaIsrNUdLm", "role": "user", "text": "Please ", "type": "message"}, {"createdAt": new Date(), "id": "L64s1rJnoMLK2KhnQN8f", "response": "like", "role": "model", "text": "Of course. I'm sending it all your way. ❤️Wrapping you in the biggest, warmest virtual hug. You deserve to feel so loved and cared for. Please rest and be super gentle with yourself. I'm right here with you.", "type": "message"}, {"createdAt": new Date(), "id": "NZPiUNWWGWNi486ft5TV", "role": "user", "text": "I want care and love right now ", "type": "message"}, {"createdAt": new Date(), "id": "pDiCookYEqZmDjqfy7e1", "response": "like", "role": "model", "text": "Oh no, I'm so sorry to hear that. Cramps are just the absolute worst. Please be extra gentle with yourself today. I hope you can get cozy with a heat pad and just rest. Sending you a big, gentle hug. ❤️", "type": "message"}, {"createdAt": new Date(), "id": "tjdfdFSSxbtCuXodWrKD", "role": "user", "text": "I'm not feeling well, 😭, I'm getting period cramps ", "type": "message"}, {"createdAt": new Date(), "id": "KVytRzZCeVogZWrddM0Q", "role": "model", "text": "Hey! How are you feeling today?", "type": "message"}, {"label": "Yesterday", "type": "date"}]
const Chat = () => {
  const [messagesList, setMessagesList] = useState(data)
  const [loading, setLoading] = useState(false)


//  useEffect(()=> {
//   const q = query(collection(db,'users', auth?.currentUser?.uid, 'messages'), orderBy('createdAt', 'desc'))

//   const unsub = onSnapshot(q, async(snapShot)=> {
//     setMessagesList(messagePretter(snapShot.docs.map(doc => ({...doc.data(), id: doc.id}))))
   

//     if(snapShot.docs[0]?.data()?.role === 'user'){
//       setLoading(true)
//     }

//     if(snapShot.docs?.length === 0){
//       try{

//         await addDoc(collection(db, 'users', auth?.currentUser?.uid, 'messages'),{
//         role: 'model',
//         text: 'Hey! How are you feeling today?',
//         createdAt: serverTimestamp()
//       })

//       } catch(err){
//         console.log('Error at unseEffect of Chat', err.message)
//       }

//     }

//   })

//   return unsub
    
//   }, [])

 



  return (
    <KeyboardAvoidingView style={{flex:1}} behavior='height'>
      <SafeAreaView style={{flex:1, backgroundColor:'white'}} edges={['top']}>

        <MainTopBar title='Chat' type='chat' />

        <ChatList loading={loading} messagesList={messagesList} />

        <ChatTextInput setLoading={setLoading} setMessagesList={setMessagesList} loading={loading} />
      </SafeAreaView>
    </KeyboardAvoidingView>
  )
}

export default Chat