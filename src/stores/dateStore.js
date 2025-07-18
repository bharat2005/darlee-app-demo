import { create } from "zustand";

export const dateStore = create((set)=> ({
    selectedDate: null,
    setSelectedDate: (date)=> set({selectedDate: date})
}))