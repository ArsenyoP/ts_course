const notifyUser = (text: string, deliveryMethod: ( msg: string) => void): void => {
    deliveryMethod(text)
}

const result = notifyUser("Some text", msg => console.log("[EMAIL] " + msg))
const result2 = notifyUser("Some text from SMS", msg => console.log("[SMS] " + msg))

result2
result



const modifyText = (text: string, transformer: (t: string) => string ): string => {
    const result = transformer(text);
    return result;
}

const transformResultUpper = modifyText("Text", text => text.toUpperCase())
const transformResultStars = modifyText("Text", text => `***${text}***`)

console.log(transformResultStars)
console.log(transformResultUpper)