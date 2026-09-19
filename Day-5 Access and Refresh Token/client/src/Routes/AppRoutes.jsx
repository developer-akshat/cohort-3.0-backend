import {createBrowserRouter, RouterProvider} from "react-router"
import Register from "../modules/Register"
import Login from "../modules/Login"

const AppRoutes = () => {

let router = createBrowserRouter([
    {
        path:"/register",
        element: <Register/>
    },
    {
        path:'/login',
        element: <Login/>
    }
])

return <RouterProvider router={router}/>


}
export default AppRoutes

