import { create } from 'zustand'

export const agreementStore = create((set)=> ({
    readTerms: false,
    readPrivacy: false,
    markTerms: ()=> set({readTerms: true}),
    markPrivacy: ()=> set({readPrivacy: true})

}))