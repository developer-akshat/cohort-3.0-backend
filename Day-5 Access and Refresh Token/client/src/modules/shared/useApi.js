import axios from "axios"
import AuthContext from "../../auth/context/Auth Provider"
import { useContext } from "react"

export default function useApi() {
    const authContext = useContext(AuthContext)

    const api = axios.create({
        baseURL:"http://localhost:5173/api",
        withCredentials:true
    })
   
    api.interceptors.request.use(config => {
        config.headers.Authorization = `Bearer ${authContext.accessToken}`

        return config
    })
    return useApi
}
