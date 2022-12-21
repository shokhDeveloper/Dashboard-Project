import "./Header.css"
import { Layout, Row, Col, Typography , Input} from "antd"
import { Container } from "../../Container"
import {Link} from "react-router-dom"
import { BellOutlined } from "@ant-design/icons"
import { MailOutlined, SearchOutlined, UserAddOutlined, MenuUnfoldOutlined, ManOutlined, MenuFoldOutlined } from "@ant-design/icons/lib/icons"
import img from "../../assets/img/Group 15354.png"
import { Context } from "../../Context"
import { useContext } from "react"
const {Header: AntdHeader} = Layout
const {Title} = Typography
export const Header = ({children}) => {
    const {collapsed , setCollapsed} = useContext(Context)
    function handleClick(){
        setCollapsed(!collapsed)
    }
    return(
        <>
        <AntdHeader style={{background: "#fff", borderBottom: "1px solid  rgba(128, 128, 128, 0.533)"}} >
        <Container>
        <Row align={"middle"} justify={"space-between"}>
            <Col>
                <Title level={3} onClick={handleClick}>
                    {collapsed !== true ?  <span><MenuUnfoldOutlined/></span>:<MenuFoldOutlined/> }
                </Title>
            </Col>
            <Col style={{width: "50%"}}>
                <ul className="nav__ul">
                    <li className="list__item" >
                        <Input type="primary" autoFocus  prefix={<SearchOutlined style={{color: "blue"}}/>} placeholder="Search"></Input>
                    </li>
                    <li className="list__item">
                        <Link>
                            <span><BellOutlined /></span>
                        </Link>
                    </li>
                    <li className="list__item">
                        <Link>
                            <span><MailOutlined/></span>
                        </Link>
                    </li>
                    <li className="list__item">
                        <Link>
                            <img src={img} alt="logo_header" style={{width: "120px",  height: "30px"}}  />
                        </Link>
                    </li>
                </ul>
            </Col>
        </Row>
        </Container>           
    </AntdHeader>
        </>
    )
}