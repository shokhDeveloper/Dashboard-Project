import { useRoutes } from "react-router"
import { Drivers_Home } from "../Default_Page/Content/Drivers/Drivers_Home"
import { Home_Content } from "../Default_Page/Content/Home_Content"
import { Accounts } from "../Default_Page/Content/Accounts"
import { Trailer } from "../Default_Page/Content/Trailer"
import { User_roles } from "../Default_Page/Content/User_roles"
export const Routes_Good = () => {
    let route = [
        {
            path: "/",
            element:<Home_Content/> 
        },
        {
            path: "/loaza_loard",
            element: <Home_Content/>
        },
        {
            path: "/accounts",
            element: <Accounts/>
        },
        {
            path: "/drivers",
            element: <Drivers_Home/>
        },
        {
            path: "/trailer",
            element: <Trailer/>
        },
        {
            path: "/user_roles",
            element: <User_roles/>
        }
    ]
    return useRoutes(route)
}