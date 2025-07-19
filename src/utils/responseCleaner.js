export const responseCleaner = (response) => {
    const start = response.indexOf("{")
    const end = response.lastIndexOf("}")

    const cleanedResponse = response.slice(start, end+1)
    return JSON.parse(cleanedResponse)

}