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

while(true){
    const userInput = await readline.question("Enter your input: ")
    
    const stream = await  model.stream([
        {
            role:"user",
            content:userInput,
        }
    ])

    for await (const chunk of stream){
        process.stdout.write(chunk.content)
    }

    process.stdout.write("\n")
}