import { Home } from "./Default_Page";
import { Context } from "./Context";
import { Routes_Good } from "./Routes_Good/Routes_Good";
import {useState, useContext} from "react"
const App = () => {
    const [collapsed, setCollapsed] = useState(!true)
    const [block, setBlock] = useState(!true)
    const [upload, setUpload] = useState("none")
    const [block_2, setBlock_2] = useState(!true)
    const [trailer, setTrailer] = useState({
        display: !true
    })
    const [users, setUsers] = useState("Y")
    return(
        <>
        <Context.Provider value={{users, setUsers,trailer,setTrailer,block_2,setBlock_2,upload, setUpload,collapsed, setCollapsed, block, setBlock}}>
            <Home>
                <Routes_Good/>
            </Home>
        </Context.Provider>
        </>
    )
}
export default App;