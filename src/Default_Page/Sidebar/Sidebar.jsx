import { Col, Collapse, Layout, Menu, Row , Typography} from "antd"
import {AppstoreOutlined, WindowsOutlined, UserAddOutlined, CarOutlined, GoogleOutlined} from "@ant-design/icons"
import { Context } from "../../Context"
import { Link, NavLink } from "react-router-dom"
import { useContext } from "react"
const {Sider} = Layout
const {Title, Text} = Typography
export const SideBar = () => {
    const {collapsed} = useContext(Context)
    const menu = [
        {
            label: <NavLink to="/" className={(params) => params.isActive ? "blues": "greys"} style={{color: "var(--kukroq)"}}>Dashboard</NavLink>,
            icon: <AppstoreOutlined style={{fontSize: "23px", color: "var(--kukroq)"}}/>
        }
    ]
    const menu_2 = [
        {
            label: <NavLink to={"/loaza_loard"} className={(params) => params.isActive? "blues": "greys"}>Loaza Loard</NavLink>,
            icon: <WindowsOutlined style={{fontSize: "23px"}}/>
        }
    ]
    const menu_3 = [
        {
            label: <NavLink to={"/accounts"} className={(params) => params.isActive? "blues": "greys" }>Accounting</NavLink>,
            icon: <UserAddOutlined  style={{fontSize: "23px"}}/>
        }
    ]
    const menu_4 = [
        {
            label: <NavLink to={"/drivers"} className={(params) => params.isActive? "blues": "greys" }>Drivers</NavLink>,
            icon: <UserAddOutlined  style={{fontSize: "23px"}}/>
        }
    ]
    const trailer = [
        {
            label:<NavLink to={"/trailer"} className={(params) => params.isActive? "blues": "greys"}>Trailer</NavLink>,
            icon: <GoogleOutlined  style={{fontSize: "23px"}}/>
        }
    ]
    const user_roles = [
        {
            label: <NavLink to={"/user_roles"} className={(params) => params.isActive? "blues": "greys"}>User roles</NavLink>,
            icon: <AppstoreOutlined  style={{fontSize: "23px"}}/>
        }
    ]
    return(
        <>
        {collapsed !== true ? <Sider theme="light" collapsed={collapsed}> 
            <Row align={"middle"} style={{paddingTop: "1.2rem", borderBottom: "1px solid rgba(128, 128, 128, 0.533) "}} justify={"center"}>
                 <Col>
                <Link to={"/"}>
                <Title className="logo" level={3} style={{color: "blue", fontWeight: "700"}}>Logo</Title>
                </Link>
                </Col>
            </Row>
            <Row justify={"center"}>
                {collapsed !== true?  <Menu items={menu} className="col" mode="inline" ></Menu>: false }    
                {collapsed !== true? <Menu items={menu_2} mode="inline" className="col"></Menu>: false}
                {collapsed !== true? <Menu items={menu_4} mode="inline" className="col" style={{fontWeight: "900"}}></Menu>: false}
                {collapsed !== true? <Menu items={menu_3} mode="inline" className="col"></Menu>: false}
                {collapsed !== true ? <Menu items={trailer} mode="inline" className="col"></Menu>: false}
                {collapsed !== true? <Menu items={user_roles} mode="inline" className="col"></Menu>: false}
            </Row>
       </Sider>: false }
        </>
    )
}