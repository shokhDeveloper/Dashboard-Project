import { Drivers } from "../Drivers_Header";
import { Driver_HeadeR_Thue } from "./Driver_Header_thue/Driver_Header_Thue";
import { Drivers_Dashboard } from "../Drivers_Dashboard";
import { Drivers_Active } from "../Drivers_Active";
export const Drivers_Home = () => {
    return(
        <>
        <Drivers></Drivers>
        <Driver_HeadeR_Thue/>
        <Drivers_Dashboard>
            <Drivers_Active/>
        </Drivers_Dashboard>
        
        </>
    )
}