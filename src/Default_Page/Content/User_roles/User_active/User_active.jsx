import "./User_active.css"
import { CloseOutlined } from "@ant-design/icons"
import { Row, Col, Typography, Button, Form, Input} from "antd"
import { Context } from "../../../../Context"
import { useContext } from "react"
const {Title, Text} = Typography
export const User_active = () => {
    const {users, setUsers} = useContext(Context)
    const handleClick = () => {
        setUsers("Y")
    }
    return(
        <div className={`user_active ${users}`}>
            <Row>
                <Col style={{display: "flex", justifyContent: "space-between", width: "100%", minHeight: "10vh", alignItems: "center", background: "var(--kuk)", borderRadius: "20px", padding: "1rem"}}>
                    <Title style={{color: "#fff"}} level={3}>
                        Give a password
                    </Title>
                    <Button style={{background: "transparent", border: "1px solid transparent"}} onClick={handleClick}><CloseOutlined style={{color: "#fff", fontSize: "25px"}}/></Button>
                </Col>
                <Form layout="vertical" style={{width: "95%", margin: "0 auto", paddingTop: "1rem"}}>
                    <Col style={{display: "flex", justifyContent: "space-between", width: "100% ", alignItems: "center"}}>
                        <Form.Item name={"password"} rules={[
                            {
                                type: "password",
                                message: "Enter your password"
                            },
                            {
                                required: true,
                                message: "Please enter your password"
                            }
                        ]} label="Password">
                            <Input></Input>
                        </Form.Item>
                        <Form.Item label="  ">
                            <Button type="primary">Save</Button>
                        </Form.Item>
                    </Col>
                </Form>
            </Row>
        </div>
        
    )
}