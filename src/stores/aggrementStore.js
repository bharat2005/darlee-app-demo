import { create } from 'zustand'

export const agreementStore = create((set)=> ({
    readTerms: false,
    readPrivacy: false,
    markTerms: (bool)=> set({readTerms: bool}),
    markPrivacy: (bool)=> set({readPrivacy: bool})

}))