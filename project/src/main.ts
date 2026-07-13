interface TextMessage{
    message: string,
    sender: string
}

interface SystemMessage{
    event: string,
    code: number
}

type AppMessage = TextMessage | SystemMessage

function parseMessage(msg: AppMessage): void{
    if("message" in msg)
    {
        console.log(`User: ${msg.sender} send message: ${msg.message}`)
    }
    else if("event" in msg)
    {
        console.log(`Event: ${msg.event} with code: ${msg.code}`)
    }
} 

const textMessage: TextMessage = {
    message: "Some message",
    sender: "Arsen"
} 

const systemMessage: SystemMessage = {
    event: "Some event",
    code: 404
}

parseMessage(textMessage)
parseMessage(systemMessage)