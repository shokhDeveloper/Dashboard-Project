import { Row, Col, Typography, Checkbox, Button} from "antd"
import {DeleteOutlined, EditOutlined} from "@ant-design/icons"
import { Context } from "../../../../Context"
import { useContext } from "react"
const {Title, Text} = Typography
export const User_Dashboard = ({children}) => {
    const {users, setUsers} = useContext(Context)
    function handleClick(){
         users === "Y"? setUsers("X"): setUsers("Y")
    }
    return(
        <>
               <Row justify={"space-between"}  align="middle" style={{width: "100%", minHeight: "10vh", border: "1px solid var(--oq)", marginTop: "1rem", padding: "0.5rem", borderRadius: "10px"}}>
                    <Col style={{width: "40%",alignItems: "center", display: "flex", justifyContent: "space-between"}}>
                        <Checkbox></Checkbox>
                        <Text style={{fontSize: "17px"}}>Rafael</Text>
                        <Text style={{fontSize: "17px"}}>John</Text>
                        <Text style={{fontSize: "17px"}}>Dispatcher</Text>
                    </Col>
                    {children}
                    <Col style={{width: "60%",display: "flex", alignItems: "center", justifyContent: "flex-end" }}>
                        <Button type="default" onClick={handleClick} style={{border: "1px solid var(--kuk)"}}><Text style={{color: "var(--kuk)"}}>Give password</Text></Button>
                        <Button style={{border: "1px solid transparent"}}><EditOutlined style={{fontSize: "25px", color: "var(--kuk)"}} /></Button>
                        <Button style={{border: "1px solid transparent"}}><DeleteOutlined style={{fontSize: "20px", color: "#FF1A1A"}}/></Button>
                    </Col>
                </Row>
                <Row justify={"space-between"}  align="middle" style={{width: "100%", minHeight: "10vh", border: "1px solid var(--oq)", marginTop: "1rem", padding: "0.5rem", borderRadius: "10px"}}>
                    <Col style={{width: "40%",alignItems: "center", display: "flex", justifyContent: "space-between"}}>
                        <Checkbox></Checkbox>
                        <Text style={{fontSize: "17px"}}>Rafael</Text>
                        <Text style={{fontSize: "17px"}}>John</Text>
                        <Text style={{fontSize: "17px"}}>Dispatcher</Text>
                    </Col>
                    <Col style={{width: "60%",display: "flex", alignItems: "center", justifyContent: "flex-end" }}>
                        <Button type="default" onClick={handleClick} style={{border: "1px solid var(--kuk)"}}><Text style={{color: "var(--kuk)"}}>Give password</Text></Button>
                        <Button style={{border: "1px solid transparent"}}><EditOutlined style={{fontSize: "25px", color: "var(--kuk)"}} /></Button>
                        <Button style={{border: "1px solid transparent"}}><DeleteOutlined style={{fontSize: "20px", color: "#FF1A1A"}}/></Button>
                    </Col>
                </Row>
                <Row justify={"space-between"}  align="middle" style={{width: "100%", minHeight: "10vh", border: "1px solid var(--oq)", marginTop: "1rem", padding: "0.5rem", borderRadius: "10px"}}>
                <Col style={{width: "40%",alignItems: "center", display: "flex", justifyContent: "space-between"}}>
                        <Checkbox></Checkbox>
                        <Text style={{fontSize: "17px"}}>Rafael</Text>
                        <Text style={{fontSize: "17px"}}>John</Text>
                        <Text style={{fontSize: "17px"}}>Dispatcher</Text>
                    </Col>
                    <Col style={{width: "60%",display: "flex", alignItems: "center", justifyContent: "flex-end" }}>
                        <Button type="default" onClick={handleClick} style={{border: "1px solid var(--kuk)"}}><Text style={{color: "var(--kuk)"}}>Give password</Text></Button>
                        <Button style={{border: "1px solid transparent"}}><EditOutlined style={{fontSize: "25px", color: "var(--kuk)"}} /></Button>
                        <Button style={{border: "1px solid transparent"}}><DeleteOutlined style={{fontSize: "20px", color: "#FF1A1A"}}/></Button>
                    </Col>
                </Row>
                <Row justify={"space-between"}  align="middle" style={{width: "100%", minHeight: "10vh", border: "1px solid var(--oq)", marginTop: "1rem", padding: "0.5rem", borderRadius: "10px"}}>
                <Col style={{width: "40%",alignItems: "center", display: "flex", justifyContent: "space-between"}}>
                        <Checkbox></Checkbox>
                        <Text style={{fontSize: "17px"}}>Rafael</Text>
                        <Text style={{fontSize: "17px"}}>John</Text>
                        <Text style={{fontSize: "17px"}}>Dispatcher</Text>
                    </Col>
                    <Col style={{width: "60%",display: "flex", alignItems: "center", justifyContent: "flex-end" }}>
                        <Button type="default" onClick={handleClick} style={{border: "1px solid var(--kuk)"}}><Text style={{color: "var(--kuk)"}}>Give password</Text></Button>
                        <Button style={{border: "1px solid transparent"}}><EditOutlined style={{fontSize: "25px", color: "var(--kuk)"}} /></Button>
                        <Button style={{border: "1px solid transparent"}}><DeleteOutlined style={{fontSize: "20px", color: "#FF1A1A"}}/></Button>
                    </Col>
                </Row>
                <Row justify={"space-between"}  align="middle" style={{width: "100%", minHeight: "10vh", border: "1px solid var(--oq)", marginTop: "1rem", padding: "0.5rem", borderRadius: "10px"}}>
                <Col style={{width: "40%",alignItems: "center", display: "flex", justifyContent: "space-between"}}>
                        <Checkbox></Checkbox>
                        <Text style={{fontSize: "17px"}}>Rafael</Text>
                        <Text style={{fontSize: "17px"}}>John</Text>
                        <Text style={{fontSize: "17px"}}>Dispatcher</Text>
                    </Col>
                    <Col style={{width: "60%",display: "flex", alignItems: "center", justifyContent: "flex-end" }}>
                        <Button type="default" onClick={handleClick} style={{border: "1px solid var(--kuk)"}}><Text style={{color: "var(--kuk)"}}>Give password</Text></Button>
                        <Button style={{border: "1px solid transparent"}}><EditOutlined style={{fontSize: "25px", color: "var(--kuk)"}} /></Button>
                        <Button style={{border: "1px solid transparent"}}><DeleteOutlined style={{fontSize: "20px", color: "#FF1A1A"}}/></Button>
                    </Col>
                </Row>
        </>
         
    )
}