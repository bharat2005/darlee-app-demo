import { View, Text, KeyboardAvoidingView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import MainTopBar from '../../src/components/Shared/MainTopBar'
import ChatList from '../../src/components/Chat/ChatList'
import { addDoc, collection, doc, onSnapshot, orderBy, query, serverTimestamp } from '@react-native-firebase/firestore'
import { auth, db } from '../../src/services/firebase/firebaseConfig'
import ChatTextInput from '../../src/components/Chat/ChatTextInput'

const Chat = () => {
  const [messagesList, setMessagesList] = useState([])
  const [loading, setLoading] = useState(false)


 useEffect(()=> {
  const q = query(collection(db,'users', auth?.currentUser?.uid, 'messages'), orderBy('createdAt', 'desc'))

  const unsub = onSnapshot(q, async(snapShot)=> {
    setMessagesList(snapShot.docs.map(doc => doc.data()))

    if(snapShot.docs[0]?.data()?.role === 'user'){
      setLoading(true)
    }

    if(snapShot.docs?.length === 0){
      try{

        await addDoc(collection(db, 'users', auth?.currentUser?.uid, 'messages'),{
        role: 'model',
        text: 'Hey! How are you feeling today?',
        createdAt: serverTimestamp()
      })

      } catch(err){
        console.log('Error at unseEffect of Chat', err.message)
      }

    }

  })

  return unsub
    
  }, [])

 



  return (
    <KeyboardAvoidingView style={{flex:1}} behavior='height'>
      <SafeAreaView style={{flex:1}} edges={['top']}>

        <MainTopBar title='Chat' type='chat' />

        <ChatList loading={loading} messagesList={messagesList} />

        <ChatTextInput setLoading={setLoading} setMessagesList={setMessagesList} />

        



      </SafeAreaView>
    </KeyboardAvoidingView>
  )
}

export default Chat