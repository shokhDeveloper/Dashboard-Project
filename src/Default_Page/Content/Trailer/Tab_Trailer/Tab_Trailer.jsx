import "./Tab_Trailer.css"
import { Row, Col, Typography, Button, Form, Input } from "antd"
import {CaretDownOutlined, CloseOutlined, UserOutlined} from "@ant-design/icons"
import { Context } from "../../../../Context"
import { useContext } from "react"
const {Text} = Typography
const {TextArea} = Input
export const Tab_Trailer = () => {
    const {trailer, setTrailer} = useContext(Context)
    const handleClick = () => {
        setTrailer({
            display: !trailer.display
        })
    }
    function handleChangeClick(){
        setTrailer({
            display: !trailer.display
        })
    }
    return(
        <div className="tab_trailer" style={{display: trailer.display !== true? 
        "none": "block" }}>
             <Row style={{width: "100%", background: "var(--oq)"}}>
                <Col style={{width: "100%",padding: "1rem",background: "var(--kuk)", display: "flex", justifyContent: "space-between", alignItems: "center", borderRadius: "10px"}}>
                    <Text level={3} style={{fontSize: "26px", color: "#fff"}}>Add Trailer</Text>
                    <Button style={{background: "transparent", border: "1px solid var(--kuk)"}} onClick={handleClick}><CloseOutlined style={{fontSize: "20px", color: "#fff"}}/></Button>
                </Col>
                {/* <Col> */}
                <Form layout="vertical" style={{width: "95%", paddingTop: "1rem", margin: "0 auto"}}>
                    <Row style={{width: "100%"}}  justify={"space-between"} >
                        <Col>
                            <Form.Item name={"number"} label="Trailer number" rules={[
                                {
                                    type: "number",
                                    message: "Enter your trailer"
                                },
                                {
                                    required: true,
                                    message: "Please enter your trailer"
                                }
                            ]}>
                                <Input></Input>
                            </Form.Item>
                        </Col>
                        <Col style={{width: "50%"}}>
                            <Form.Item name={"type"} label="Trailer type" style={{width: "100%"}} rules={[
                                {
                                    type: "text",
                                    message: "Enter your type",
                                },
                                {
                                    required: true,
                                    message: "Please enter your type"
                                }
                            ]}>
                                <Input prefix={<CaretDownOutlined/>}></Input>
                            </Form.Item>
                        </Col>
                        <Col style={{width: "90%",display: "flex", justifyContent: "space-between"}}>
                            <Form.Item label="License plate">
                                <Input></Input>
                            </Form.Item>
                            <Form.Item name={"date"} label="Plate expire" rules={[
                                {
                                    type: "date"
                                }
                            ]}>
                                <Input type="date"></Input>
                            </Form.Item>
                            <Form.Item label="Inspection Expiration" name={"expration"} rules={[
                                {
                                    type: "date"
                                }
                            ]}>
                                <Input type="date"></Input>
                            </Form.Item>
                        </Col>
                        <Col style={{width: "100%",display: "flex", justifyContent: "center"}}>
                            <Form.Item label="Internal notes">
                                <TextArea cols={50} rows={5}></TextArea>
                            </Form.Item>
                        </Col>
                        <Col style={{display: "flex", justifyContent: "flex-end", width: "100%", padding: "1rem 0rem"}}>
                            <Button style={{color: "var(--kuk)", border: "1px solid var(--kuk)", margin: "0rem 1rem"}} onClick={handleChangeClick}>Cancel</Button>
                            <Button type="primary" style={{margin: "0rem 1rem"}}>Save</Button>
                        </Col>
                    </Row>
                </Form>
                {/* </Col> */}
             </Row>
        </div>
    )
}