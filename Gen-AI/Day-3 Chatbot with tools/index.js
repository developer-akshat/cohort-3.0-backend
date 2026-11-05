import {ChatGroq} from "@langchain/groq";
import { configDotenv } from "dotenv";
import * as z from "zod"
import rl from "readline/promises"
import { tool , createAgent } from 'langchain'

configDotenv()
const event = []
const createEventTool = tool(
    async function ({ date,title,description}) {

        console.log("Creating event with date:",{date,title,description})
        event.push({
            date,
            title,
            description
        })
        return "Event Created"
    },
    {
        name:"createEvent",
        description:"Creates an event with date, title and description",
        schema: z.object({
            date: z.string().describe("Date of the event in YYYY-MM-DD format"),
            title: z.string().describe("Title of the event"),
            description: z.string().describe("Description of the event")
        })
        
    }
)

const getEventsTool = tool(
    async function () {
        console.log("Retrieving events",event)
        return event
    },
    {
        name:'getEvents',
        description:"Retrive all events",
        schema: z.object({})
    }
)

const readline = rl.createInterface({
    input: process.stdin,
    output: process.stdout
})



const model = new ChatGroq({
    model:"openai/gpt-oss-120b",
    api:process.env.GROQ_API_KEY,
})

const agent = createAgent({
    model,
    tools:[createEventTool,getEventsTool]
})

while(true){
    const userInput = await readline.question("Enter your input: ")

    const stream = await agent.stream({
        messages:[{
            role:"user",
            content:userInput
        },
    ]
},{streamMode:"messages"}
)
for await (const [chunk] of stream){
    process.stdout.write(chunk.content)
}
process.stdout.write("\n")
}