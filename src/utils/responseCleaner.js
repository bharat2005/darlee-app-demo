export const responseCleaner = (response, isArray=false) => {
    const start = response.indexOf(isArray ? "[" : "{")
    const end = response.lastIndexOf(isArray ? "]" : "}")

    const cleanedResponse = response.slice(start, end+1)
    return JSON.parse(cleanedResponse)

}