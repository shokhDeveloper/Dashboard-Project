import { Row, Col, Typography, Form,Input, Menu, Select } from "antd"
export const Trailer_Input_Header = () => {
    const options = [
        {
            label: "Crone Truck",
            value: "truck"
        },
        {
            label: "Child Truck",
            value: "child_truck"
        }
    ]
    return(
        <Row justify={"start"}>
            <Col style={{width: "100%", borderRadius: "10px", border: "1px solid var(--oq)"}}>
                <Form  layout="vertical" style={{width: "90%",display: "flex", paddingTop: "1rem", alignItems: "center", justifyContent: "space-evenly"}}>
                    <Form.Item name={"messi"} label="ID" htmlFor="id" rules={[
                        {
                            type: "number",
                            message: "Enter your Id"
                        },
                        {
                            required: true,
                            message: "Please enter your iD"
                        }
                    ]} hasFeedback>
                        <Input id="id"></Input>
                    </Form.Item>
                    <Form.Item label="Trailer type" name={"select"} rules={[
                        {
                            message: "Enter your truck"
                        },
                        {
                            message: "Please enter your truck"
                        },
                    ]}>
                        <Select defaultValue={"truck"} options={options}>
                        </Select>
                    </Form.Item>
                    <Form.Item name={"plate"} label="License plate" rules={[
                        {
                            type: "text",
                            message: "Enter your plate"
                        },
                        {
                            required: true,
                            message: "Please enter your plate"
                        },
                    ]}>
                        <Input></Input>
                    </Form.Item>
                    <Form.Item name={"expiry"} rules={[
                        {
                            type: "text",
                            message: 'Enter your exipy'
                        },
                        {
                            required: true,
                            message: "Please enter your exiy"
                        }
                    ]} label="Plate Expiry" hasFeedback>
                        <Input></Input>
                    </Form.Item>
                    <Form.Item name={"expiration"} rules={[
                        {
                            type: "text",
                            message: 'Enter your exipy'
                        },
                        {
                            required: true,
                            message: "Please enter your expiration"
                        }
                    ]} hasFeedback label="Inspection expiration">
                        <Input></Input>
                    </Form.Item>
                    <Form.Item name={"status"} label="Status" rules={[
                        {
                            type: "number",
                            message: "Enter your status"
                        },
                        {
                            required: true,
                            message: "Please enter your status"
                        },
                    ]}>
                        <Input></Input>
                    </Form.Item>    
                </Form>
            </Col>
        </Row>
    )
}