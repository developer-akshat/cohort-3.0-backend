import fs from "fs/promises"
import { CONFIG_DIR,HOME_DIR } from "./constant.js"
import path from "path"

/**
 * Return the content of settings file (create if it doesn't exist)
 */


export async function getSettingsFile(){

    try {
        await fs.access(CONFIG_DIR)
    } catch (error) {
        await fs.mkdir(CONFIG_DIR, {recursive:true})
    }


    const settingFilePath = path.join(CONFIG_DIR, "setting.json")

    try {
        await fs.access(settingFilePath)
        const content = await fs.readFile(settingFilePath, "utf-8")
        return JSON.parse(content)
    } catch (error) {
        await fs.writeFile(settingFilePath,JSON.stringify({}))
        return{}
    }
}

/**
 * Save API key to settings file
 */

export async function saveApiKey(apiKey) {
    const settingFilePath = path.join(CONFIG_DIR, "setting.json")

    const settingContent = await getSettingsFile()
    await fs.writeFile(settingFilePath, JSON.stringify({
        ...settingContent,
        apiKey
    }))
}

export async function getApiKey(){
    const settings = await getSettingsFile()
    return settings.apiKey || null
}