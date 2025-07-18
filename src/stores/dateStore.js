
export const dateStore = ((set)=> ({
    selectedDate: null,
    setSelectedDate: (date)=> set({selectedDate: date})
}))