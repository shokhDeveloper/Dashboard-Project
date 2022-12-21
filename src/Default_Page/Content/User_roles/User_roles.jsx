import { User_title } from "./User_title"
import { User_Header } from "./User_Header"
import { Container_Dashboard } from "../../../Container_dashboard"
import { User_Dashboard } from "./User_dashboard"
import { User_active } from "./User_active"
export const User_roles = () => {
    return(
        <Container_Dashboard>
            <User_title/>
            <User_Header/>
            <User_Dashboard>
                <User_active/>
            </User_Dashboard>
        </Container_Dashboard>        
    )
}