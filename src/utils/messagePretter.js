import { format, isToday, isYesterday, parseISO } from "date-fns";

export const messagePretter = (messagesList) =>{
    let lastUpdatedLabel = ''
    const myList = [];

    messagesList.reverse().forEach((message, index)=> {
        let label = ''
        const jsDate = message?.createdAt.toDate()

        if(isToday(jsDate)){
            label = 'Today'
        } else if (isYesterday(jsDate)){
            label = 'Yesterday'
        } else {
            label = format(jsDate, 'dd MMMM yyyy' )
        }

        if(label !== lastUpdatedLabel){
            myList.push({
                type:'date',
                label
            })

            lastUpdatedLabel = label
        }

        myList.push({
            type:'message',
            ...message
        })
    })


    return myList.reverse()


}