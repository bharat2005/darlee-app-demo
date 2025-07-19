import { getISOWeek, getYear, parseISO } from "date-fns"

export const getWeekKey = (date) => {
    const jsDateObj = parseISO(date)
    const week = getISOWeek(jsDateObj).toString()
    const year = getYear(jsDateObj).toString()

    return `${year}-W${week.padStart(2, '0')}`
}