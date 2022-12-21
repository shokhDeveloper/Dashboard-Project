import "./Drivers.active.css"
import { Context } from "../../../../Context"
import { useContext } from "react"
// import { useContext, useRef } from "react"
import { Col, Row, Layout, Typography, Button, Input, Form, Menu, Checkbox, Radio} from "antd"
import {CloseOutlined, PlusOutlined, CaretDownOutlined, UploadOutlined} from "@ant-design/icons"
import TextArea from "antd/es/input/TextArea"
// import Image from "../../assets/img/Undov.png"
const {Header} = Layout
const {Text} = Typography
export const Drivers_Active = () => {
    const {block_2, setBlock_2} = useContext(Context)
    // const parent = useRef()
    const shox = [
        {
            label: "Lood"
        }
    ]
    const leo = [
        {
            label: <Text><Radio></Radio>Sales Rep 1</Text>,
        }
    ]
    function handleClickX(){
        setBlock_2(!block_2)
    }
    const leo_2 = [
        {
            label: "Please Select Rep 1",
            children: [
                {
                    label: "Children"
                }
            ]
        }
    ]
    let radio = [
        {
            label: <Text><Radio></Radio>Sales Rep</Text>
        }
    ]
    const status = [
        {
            label: "Status"
        }
    ]
    const status_parent = [
        {
            label: "On Route",
            children : [
                {
                    label: "Route"
                }
            ]
        }
    ]
    const Active = [
        {
            label: "Active",
            children:[
                {
                    label: "Not active"
                }
            ]
        }
    ]
    return(
        <div className="drivers_active" style={{display: block_2  === true? "block": "none"}}>
                 <Row style={{borderBottom: "1px solid grey"}}>
                <Layout style={{}}>
                <Header style={{background: "blue", display: "flex", justifyContent: "space-between", alignItems: "center", borderRadius: "15px"}}>
                    <Text style={{fontSize: "25px", color: "#fff", fontWeight: "700"}}>Driver</Text>
                    <Button style={{background: "transparent", border: "1px solid transparent"}} onClick={handleClickX}><CloseOutlined style={{fontSize: "24px", color: "#fff"}} /></Button>
                </Header>
                <Col className="col_active" style={{width: "17%", display: "flex", justifyContent: "space-between", padding: "1rem 1rem 0rem 1rem"}}>
                    <Button type="primary">Driver 1</Button>
                </Col>
                </Layout>
            </Row>
           <Row>
            <Layout>
            <Form layout="vertical" style={{padding: "1rem 0ren 0rem 0rem", borderBottom: "1px solid grey"}}>
            <Col className="class_form" style={{display: "flex", alignItems: "center"}}>
                <Form.Item label="Lood" style={{margin : "0rem 1rem"}}  rules={shox}>
                    <Input autoFocus></Input>
                </Form.Item>
                <Form.Item label="Bill To" style={{margin: "0rem 1rem"}}>
                    <Input></Input>
                </Form.Item>
                <Form.Item label="Dispatcher" style={{margin: "0rem 1rem"}}>
                    <Input></Input>
                </Form.Item>
                <Form.Item label="Dispatcher" style={{margin: "0rem 1rem"}}>
                    <Input></Input>
                </Form.Item>
                <Form.Item label="Dispatcher" style={{margin: "0rem 1rem"}}>
                    <Input></Input>
                </Form.Item>
                
            </Col>
            <Col className="class_form" style={{display: "flex", alignItems: "center", justifyContent: "space-evenly"}}>
              
                <Form.Item label="Type" style={{position: "relative", top: "1.1rem"}} >
                    <Input prefix={<CaretDownOutlined/>}></Input>
                </Form.Item>
                <Form.Item label="Rate" style={{margin: "0rem 0.5rem", position: "relative", top: "0.3rem"}}>
                    <Input></Input>
                </Form.Item>
                                <Form.Item style={{position: "relative", top: "0.3rem", margin: "0rem 0.5rem"}} label={<Text> P Ds <Radio></Radio> Rate %</Text>}>
                    <Input value={"0:00"}></Input>
                </Form.Item>
               </Col>
               <Col style={{width: "90%", margin : "0 auto", display: "flex", justifyContent: "space-evenly", alignItems: "center"}}>
                <Form.Item label={<Text><Radio></Radio> Carrier <Radio></Radio> Driver</Text>} style={{margin:"0rem 1rem"}}>
                    <Input prefix={<CaretDownOutlined/>}></Input>
                </Form.Item>
                <Form.Item label="Trailer"  style={{margin:"0rem 1rem"}}>
                    <Input prefix={<CaretDownOutlined/>}></Input>
                </Form.Item>
                <Form.Item label="Flat Rate"  style={{margin:"0rem 1rem"}}>
                    <Input></Input>
                </Form.Item>
                <Form.Item label="Flat Rate"  style={{margin:"0rem 1rem"}}>
                    <Input></Input>
                </Form.Item>
               </Col>
                <Col className="col_active">
                    <Form.Item label="Date of Birth">
                        <Input type="date"></Input>
                    </Form.Item>
                    <Form.Item label="Date of Hire">
                        <Input type="date"></Input>
                    </Form.Item>
                    <Form.Item label="License No.">
                        <Input ></Input>
                    </Form.Item>
                    <Form.Item label="Exp Data">
                        <Input type="date"></Input>
                    </Form.Item>
                </Col>
                <Col className="col_active">
                    <Form.Item label="Date of Birth">
                        <Input type="date"></Input>
                    </Form.Item>
                    <Form.Item label="Date of Hire">
                        <Input type="date"></Input>
                    </Form.Item>
                    <Form.Item label="License No.">
                        <Input type="date" ></Input>
                    </Form.Item>
                    <Form.Item label="Exp Data">
                        <Input type="date"></Input>
                    </Form.Item>
                </Col>
                <Col className="col_active">
                    <Form.Item label="Date of Birth">
                        <Input type="date"></Input>
                    </Form.Item>
                    <Form.Item label="Date of Hire">
                        <Input type="date"></Input>
                    </Form.Item>
                    <Form.Item label="License No.">
                        <Input type="date" ></Input>
                    </Form.Item>
                    <Form.Item label="Exp Data">
                        <Input type="date"></Input>
                    </Form.Item>
                </Col>
                <Col className="col_active_textarea">
                    <Form.Item label="Internal Notes">
                        <TextArea cols={90} rows={8}>
                        </TextArea>
                    </Form.Item>
                </Col>
                <Row className="col_active_menu">
                    <Col style={{width: "30%"}}>
                        <Form.Item>
                            <Menu items={Active} style={{borderRadius: "10px"}} mode="inline"></Menu>
                        </Form.Item>
                    </Col>
                    <Col>
                        <Form.Item>
                            <Button onClick={handleClickX} style={{margin:" 0rem 1rem", border: "1px solid var(--kuk)", color: "var(--kuk)"}}>Cancel</Button>
                            <Button style={{margin: "0rem 1rem"}} type="primary">Save</Button>
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
            </Layout>
           </Row>
        </div>
    )
}