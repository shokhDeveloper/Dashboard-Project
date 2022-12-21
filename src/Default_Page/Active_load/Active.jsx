import "./Active.css"
import { Context } from "../../Context"
import { useContext, useRef } from "react"
import { Col, Row, Layout, Typography, Button, Input, Form, Menu, Checkbox, Radio , Upload} from "antd"
import {CloseOutlined, PlusOutlined, CaretDownOutlined, UploadOutlined} from "@ant-design/icons"
import Image from "../../assets/img/Undov.png"
const {Header} = Layout
const {Text} = Typography
export const Active = () => {
    const {block, setBlock, upload, setUpload} = useContext(Context)
    const parent = useRef()
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
        setBlock(!block)
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
    const handleCancel = () => {
        setBlock(!block)
    }
    function handleCancel_upload(){
        setUpload((load) => load ==="none"? "flex":"none" )
    }
    const handleUpload = () => {
        setUpload((load) => load ==="none"? "flex":"none" )
    }   
    return(
       <div ref={parent} style={{display: `${block !== true? "none":"block" }`}} className="active">
            <Row style={{borderBottom: "1px solid grey"}}>
                <Layout style={{}}>
                <Header style={{background: "blue", display: "flex", justifyContent: "space-between", alignItems: "center", borderRadius: "15px"}}>
                    <Text style={{fontSize: "25px", color: "#fff", fontWeight: "700"}}>New Active Load</Text>
                    <Button style={{background: "transparent", border: "1px solid transparent"}} onClick={handleClickX}><CloseOutlined style={{fontSize: "24px", color: "#fff"}} /></Button>
                </Header>
                <Col className="col_active" style={{width: "17%", display: "flex", justifyContent: "space-between", padding: "1rem 1rem 0rem 1rem"}}>
                    <Button type="primary">Customer</Button>
                    <Button style={{borderRadius: "50%"}}><PlusOutlined style={{fontSize: "17px"}}/></Button>
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
                <Form.Item style={{margin: "0rem 1rem"}}>
                    <Row justify={"space-between"} style={{display: "flex"}}>
                    <Col>
                    <Menu items={leo} mode="inline" style={{borderRadius: "10px", background: "transparent"}}></Menu>
                    </Col>
                    <Col>
                    <Menu items={radio} style={{borderRadius: "10px", background: "transparent"}} mode="inline"></Menu>
                    </Col>  
                    </Row>
                    <Menu items={leo_2} mode="inline" style={{borderRadius: "10px"}}></Menu>
                </Form.Item>
            </Col>
            <Col className="class_form" style={{display: "flex", alignItems: "center"}}>
                <Form.Item style={{margin: "0rem 1rem"}}>
                <Menu items={status} style={{background: "transparent"}}></Menu>
                <Menu items={status_parent} style={{background: "#fff", borderRadius: "14px"}} mode="inline"></Menu>
                </Form.Item>
                <Form.Item label="W/O" style={{position: "relative", top: "0.5rem", margin: "0rem 0.5rem"}}>
                <Input></Input>
                </Form.Item>
                <Form.Item label="Type" style={{position: "relative", top: "1.1rem"}} >
                    <Input prefix={<CaretDownOutlined/>}></Input>
                </Form.Item>
                <Form.Item label="Rate" style={{margin: "0rem 0.5rem", position: "relative", top: "0.3rem"}}>
                    <Input></Input>
                </Form.Item>
                <Form.Item label="P/Ds" style={{position: "relative", top: "1rem"}}>
                    <Input></Input>
                </Form.Item>
                <Form.Item label="Other Changes" style={{margin: "0rem 0.5rem 0rem 0.5rem", position: "relative", top: "0.3rem"}}>
                    <Input></Input>
                </Form.Item>
                <Form.Item style={{position: "relative", top: "0.3rem", margin: "0rem 0.5rem"}} label={<Text> P Ds <Radio></Radio> Rate %</Text>}>
                    <Input value={"0:00"}></Input>
                </Form.Item>
                
               </Col>
               <Col style={{display: "flex", justifyContent: "space-evenly", alignItems: "center"}}>
                <Form.Item label={<Text><Radio></Radio> Carrier <Radio></Radio> Driver</Text>}>
                    <Input prefix={<CaretDownOutlined/>}></Input>
                </Form.Item>
                <Form.Item label="Equipment Type">
                <Input prefix={<CaretDownOutlined/>}></Input>
                </Form.Item>
                <Form.Item label="Truck">
                    <Input prefix={<CaretDownOutlined/>}></Input>
                </Form.Item>
                <Form.Item label="Trailer">
                    <Input prefix={<CaretDownOutlined/>}></Input>
                </Form.Item>
                <Form.Item label="Flat Rate">
                    <Input></Input>
                </Form.Item>
               </Col>
               <Col className="col_active" style={{width: "17%", display: "flex", justifyContent: "space-between", padding: "1rem 1rem 0rem 1rem"}}>
                    <Button  type="primary">Customer</Button>
                    <Button style={{borderRadius: "50%"}}><PlusOutlined style={{fontSize: "17px"}}/></Button>
                </Col>
            </Form>
            <Row style={{padding: "1rem 0rem"}} justify="space-between">
                <Layout>
                    <Form layout="vertical">
                        <Col style={{display: "flex", justifyContent: "space-evenly", alignItems: "center"}}>
                           <Form.Item label="Shipper">
                            <Input>
                            </Input>
                           </Form.Item>
                           <Form.Item label="Location">
                            <Input>
                            </Input>
                           </Form.Item>
                           <Form.Item  label="Date">
                            <Input type="date">
                            </Input>
                           </Form.Item>
                           <Form.Item label={<Text><Radio></Radio> Show Time</Text>}>
                            <Input prefix={<CaretDownOutlined/>}></Input>
                           </Form.Item>
                        </Col>
                        <Col style={{display: "flex", justifyContent: "space-evenly"}}>
                            <Form.Item label="Description">
                                <Input></Input>
                            </Form.Item>
                            <Form.Item label="Type ( TL, LTL, Pallets, etc.)">
                                <Input></Input>
                            </Form.Item>
                            <Form.Item label="Qty">
                                <Input></Input>
                            </Form.Item>
                            <Form.Item label="Weight ( lbs )">
                                <Input></Input>
                            </Form.Item>
                            <Form.Item label="Value ($)">
                                <Input></Input>
                            </Form.Item>
                        </Col>
                        <Col style={{display: "flex", width: "40%", margin: "0 auto",  justifyContent: "space-between"}}>
                            <Form.Item label="Delivery Notes">
                                <Input></Input>
                            </Form.Item>
                            <Form.Item label="P.O.Numbers">
                                <Input></Input>
                            </Form.Item>
                        </Col>
                    </Form>
                    
                </Layout>
                <Form>
                    <Layout>
                        <Col style={{width: "90%", margin: "0 auto",display: "flex", justifyContent: 'space-evenly'}}>
                            <Form.Item label="ProMiles Miles" style={{margin: "0rem 1rem"}}>
                                <Input></Input>
                            </Form.Item>
                            <Form.Item label="Empty">
                                <Input></Input>
                            </Form.Item>
                            <Form.Item label="Driver Miles"  style={{margin: "0rem 1rem"}}>
                                <Input></Input>
                            </Form.Item>
                            <Form.Item label="Empty"  style={{margin: "0rem 1rem"}}>
                                <Input></Input>
                            </Form.Item>
                            <Form.Item label="Hourly"  style={{margin: "0rem 1rem"}}>
                                <Input></Input>
                            </Form.Item>
                        </Col>
                        <Col style={{width: "95%", margin: "0 auto"}}>
                            <Form.Item>
                                    <Button onClick={handleUpload}><UploadOutlined/>Fayl yuklash</Button>
                           
                                
                            </Form.Item>
                        </Col>
                        <Col className="uploads" style={{display: upload}}>
                        
                            <img src={Image} alt="" />
                            <Text style={{fontSize: "19px", color: "var(--kuk)", fontWeight: "700"}}>
                                    You didn't upload Rate confirmation
                            </Text>
                            <Row justify={"center"}>
                                <Col className="cols_upload">
                                <Upload>
                                    <Button style={{ border: "1px solid var(--kuk)",    color: "var(--kuk)"}}>
                                    Upload file
                                    </Button>        
                                </Upload>
                                </Col>
                                <Col className="cols_upload">
                                <Button type="primary" onClick={handleCancel_upload}>Cancel</Button>
                                </Col>
                            </Row>
                        </Col>
                        <Col style={{width: "95%", margin: "0 auto"}}>
                            <Form.Item style={{display: "flex", justifyContent: "flex-end"}}>
                                <Button onClick={handleCancel} style={{margin: "0rem 1rem",border: "1px solid blue", color: "blue"}} type="default">Cancel</Button>
                                <Button type="primary">Save</Button>
                            </Form.Item>
                        </Col>
                    </Layout>
                </Form>
            </Row>
            </Layout>
           </Row>
       </div> 
    )
}