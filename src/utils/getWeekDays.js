import { addDays, format, parseISO, startOfISOWeek } from "date-fns"

export const getWeekDays = (dateString)=>{
    const moday = startOfISOWeek(parseISO(dateString))

    return Array.from({length:7}).map((item,index)=>{
        return format(addDays(moday,index),'yyyy-MM-dd')
    })

}