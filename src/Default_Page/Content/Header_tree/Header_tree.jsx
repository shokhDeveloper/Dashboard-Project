import {Layout as Layouts} from "../../Layout"
import { Row, Col, Layout, Typography } from "antd"
import { Link } from "react-router-dom"
const {Header} = Layout
const {Title} = Typography
export const Header_tree = () => {
    return(
        <div style={{background: "white"}}>
            <Layouts>
                <Header style={{width: "95%", margin: "0 auto", background: "#fff", border: "1px solid var(--oq)", borderRadius: "7px"}}>
                    <Row>
                        <Col style={{width: "100%", display: "flex", justifyContent: "space-between"}}>
                            <Link style={{fontSize: "17px", color: "#687791"}}>Hello</Link>         
                            <Link style={{fontSize: "17px", color: "#687791"}}>W/O #</Link>        
                            <Link style={{fontSize: "17px", color: "#687791"}}>Driver/Carrier</Link>
                            <Link style={{fontSize: "17px", color: "#687791"}}>Ship Date</Link>
                            <Link style={{fontSize: "17px", color: "#687791"}}>Del Date</Link>
                            <Link style={{fontSize: "17px", color: "#687791"}}>Custimer</Link>
                            <Link style={{fontSize: "17px", color: "#687791"}}>Origin</Link>
                            <Link style={{fontSize: "17px", color: "#687791"}}>Destination</Link>
                            <Link style={{fontSize: "17px", color: "#687791"}}>BOL</Link>
                            <Link style={{fontSize: "17px", color: "#687791"}}>POD</Link>
                            <Link style={{fontSize: "17px", color: "#687791"}}>Load Status</Link>
                        </Col>
                    </Row>
                 </Header> 
            </Layouts>       
        </div>
    )
}