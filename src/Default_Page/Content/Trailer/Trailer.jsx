import { Container_Dashboard } from "../../../Container_dashboard"
import { Trailer_NewTab } from "./Trailer_NewTab"
import { Trailer_Input_Header } from "./Trailer_Input_Header"
import { Trailer_Dashboard } from "./Trailer_Dashboard"
import { Tab_Trailer } from "./Tab_Trailer"
export const Trailer = () => {
    return(
       <Container_Dashboard>
            <Trailer_NewTab/>
            <Trailer_Input_Header/>
            <Trailer_Dashboard>
                <Tab_Trailer/>
            </Trailer_Dashboard>
       </Container_Dashboard>
    )
}