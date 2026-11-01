import { getSettingsFile, saveApiKey } from "./Utils/file.utils.js";
import rl from "./Utils/readline.js";
async function main(){
    const settings = await getSettingsFile()
    console.log(settings)
    if(!settings.apiKey){
        const apiKey = await rl.question("Please enter your API key: ")
        await saveApiKey(apiKey)
    }

   
}

export default main