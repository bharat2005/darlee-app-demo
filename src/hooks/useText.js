import { useQuery } from '@tanstack/react-query'

import { db } from '../services/firebase/firebaseConfig'

const data = {
    privacy:  [{"text": "We truly care about your privacy. Everything you enter stays between you and your app. No ads, no creepy trackers, no weird stuff.", "title": "Privacy Matters 🕊️"}, {"text": "Only what you choose to give — like your cycle dates, moods, and symptoms. TThat’s it. Nothing extra, nothing hidden.", "title": "What We Collect 🌷"}, {"text": "Just to give you better insights and gentle support. We don’t sell your info. We don’t share it. Ever.", "title": "How We Use It 🧠"}, {"text": "Your data is stored securely with encryption and love. You’re safe here.", "title": "Keeping It Safe 🔐"}, {"text": "You can delete your data anytime from the settings. No judgment, no guilt.", "title": "Your Control 🎛️"}, {"text": "We don’t track your location. We don’t watch your activity outside the appp. This is your private, cozy space.", "title": "No Creepy Stuff 🚫"}, {"text": "DarLee is more than an app — it’s a quiet kind of love. Built gently, for every mood, every moment, every you.", "title": "Made With Care 🤍"}]    ,
    terms:  [{"text": "This app was made with love to gently support you through your moods, cycles, and everything in between. By using DarLee, you're agreeing to these terms — they’re here to keep things safe and respectful for everyone.", "title": "Welcome to DarLee 💖"}, {"text": "DarLee helps you track your period, moods, symptoms, and other emotional/physical patterns. It's powered by AI to give you sweet insights and soft predictions, just to make your days a little easier.", "title": "What DarLee Does 🧸"}, {"text": "Please use DarLee with kindness and honesty. Don’t use it for anything unsafe, harmful, or dishonest. This is a safe space — treat it (and others) with care.", "title": "Your Responsibility ✨"}, {"text": "DarLee is just for you — not to be copied, sold, or repackaged. It’s your little emotional helper, not a business tool.", "title": "Personal Use Only 📱"}, {"text": "DarLee is here to support, not diagnose. While the AI is smart and caring, it’s not a substitute for real medical help. Always check with a doctor if you’re unsure or need serious guidance.", "title": "No Medical Advice 🛑"}, {"text": "We do our best to keep everything secure and running well. If bugs or issues happen, know we’re working on it with love — but we can’t guarantee perfection.", "title": "Keeping It Safe 🛠️"}, {"text": "We migght update features, fix bugs, or add new soft sparkles over time. We’ll try to let you know when anything important changes.", "title": "Changes to DarLee 🔄"}, {"text": "Got questions, love letters, or gentle feedback? Reach out at bharatvdeshm2005@gmail.com— we’d love to hear from you.", "title": "Contact Us 💌"}]
}


export const useText = (id) => {
    return useQuery({
        queryKey:['agreement',id],
        queryFn:async()=> {
            // const res = await getDoc(doc( db, 'textData', id))
            // return res.data()?.array || []
            return data[id]
        },
        enabled:!!id
    })
}