import {ChatGroq} from "@langchain/groq";
import { configDotenv } from "dotenv";
import * as z from "zod"
import rl from "readline/promises"

configDotenv()

const readline = rl.createInterface({
    input: process.stdin,
    output: process.stdout
})



const model = new ChatGroq({
    model:"openai/gpt-oss-120b",
    api:process.env.GROQ_API_KEY,
})

const messages = []


while(true){
    const userInput = await readline.question("Enter your input: ")
    
    messages.push({
        role:"user",
        content: userInput
    })
    const stream = await  model.stream(messages)
    let airesponse = ""
    for await (const chunk of stream){
        airesponse += chunk.content
        process.stdout.write(chunk.content)
    }

    messages.push({
        role:"assistant",
        content:airesponse
    })
    process.stdout.write("\n")
}