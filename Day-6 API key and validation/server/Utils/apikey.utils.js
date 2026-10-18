import crypto from "crypto"

export const generateapikey = ()=>{
    return crypto.randomBytes(15).toString("hex")
}

 