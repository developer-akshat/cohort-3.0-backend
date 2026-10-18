import env from "dotenv"


env.config()

const config = {
    MONGOURI : process.env.MONGO_URI,

}
export default config