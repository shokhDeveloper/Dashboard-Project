import { PlusOutlined, SearchOutlined } from "@ant-design/icons"
import {Row, Col, Typography, Button, Checkbox, Avatar} from "antd"
import { CaretDownOutlined } from "@ant-design/icons"
const {Title, Text} = Typography
export const Accounts_Header = () => {
    return(
        <div className="accounts_header" style={{width: "95%", margin:" 0 auto"}}>
            <Row justify={"space-around"} style={{width: "30%", minHeight: "12vh"}} align="middle">
                <Col>
                    <Title level={3}>Accounting</Title>
                </Col>
                <Col>
                    <Button><PlusOutlined/> Add Filters</Button>
                    <Button><SearchOutlined/> Search</Button>
                </Col>
            </Row>
            <Row justify={"space-evenly"}>
                <Col style={{width: "20%", display: "flex", justifyContent: "space-evenly"}}>
                    <Button type="primary">Complated</Button>
                    <Button type="default" style={{color: "grey"}}>Pending</Button>
                    <Button type="default" style={{color: "grey"}}>Paid</Button>
                </Col>
            </Row>
            <Row justify={"center"} align="middle" style={{paddingTop: "1rem"}}>
                <Col style={{display: "flex", justifyContent: "space-evenly", width: "100%", border: "1px solid var(--oq)", padding: "1rem", borderRadius: "10px"}}>
                    <Text>ID#</Text>
                    <Text>W/O #</Text>
                    <Text>Driver/Carrier</Text>
                    <Text>Driver/Carrier</Text>
                    <Text>Del Date</Text>
                    <Text>Custimer</Text>
                    <Text>Origin</Text>
                    <Text>Destination</Text>
                    <Text>BOL</Text>
                    <Text>POD</Text>
                    <Text>Load Status</Text>
                </Col>
            </Row>
            <Row style={{paddingTop: "1rem"}}>
                <Col style={{display: "flex", justifyContent: "space-evenly", width: "100%", border: "1px solid var(--oq)", padding: "1rem", borderRadius: "10px", marginTop: "1rem"}}>
                    <Checkbox checked></Checkbox>
                    <Text>3072</Text>
                    <Text>1142V4P8S</Text>
                    <Text>Patel Hiteshkumar</Text>
                    <Text>2022-11-05</Text>
                    <Text>2022-11-05</Text>
                    <Text>Amazon</Text>
                    <Text>LIT1 / Little Rock, AR</Text>
                    <Text>LIT1 / Little Rock, AR</Text>
                    <Avatar style={{background: "#13CA5C"}}></Avatar>
                    <Avatar style={{background: "#13CA5C"}}></Avatar>
                    <Button>Open <CaretDownOutlined/> </Button>
                </Col>
                <Col style={{display: "flex", justifyContent: "space-evenly", width: "100%", border: "1px solid var(--oq)", padding: "1rem", borderRadius: "10px", marginTop: "1rem"}}>
                    <Checkbox checked></Checkbox>
                    <Text>3072</Text>
                    <Text>1142V4P8S</Text>
                    <Text>Patel Hiteshkumar</Text>
                    <Text>2022-11-05</Text>
                    <Text>2022-11-05</Text>
                    <Text>Amazon</Text>
                    <Text>LIT1 / Little Rock, AR</Text>
                    <Text>LIT1 / Little Rock, AR</Text>
                    <Avatar style={{background: "#13CA5C"}}></Avatar>
                    <Avatar style={{background: "#13CA5C"}}></Avatar>
                    <Button>Open <CaretDownOutlined/> </Button>
                </Col>
                <Col style={{display: "flex", justifyContent: "space-evenly", width: "100%", border: "1px solid var(--oq)", padding: "1rem", borderRadius: "10px", marginTop: "1rem"}}>
                    <Checkbox checked></Checkbox>
                    <Text>3072</Text>
                    <Text>1142V4P8S</Text>
                    <Text>Patel Hiteshkumar</Text>
                    <Text>2022-11-05</Text>
                    <Text>2022-11-05</Text>
                    <Text>Amazon</Text>
                    <Text>LIT1 / Little Rock, AR</Text>
                    <Text>LIT1 / Little Rock, AR</Text>
                    <Avatar style={{background: "#13CA5C"}}></Avatar>
                    <Avatar style={{background: "#13CA5C"}}></Avatar>
                    <Button>Open <CaretDownOutlined/> </Button>
                </Col>
                <Col style={{display: "flex", justifyContent: "space-evenly", width: "100%", border: "1px solid var(--oq)", padding: "1rem", borderRadius: "10px", marginTop: "1rem"}}>
                    <Checkbox checked></Checkbox>
                    <Text>3072</Text>
                    <Text>1142V4P8S</Text>
                    <Text>Patel Hiteshkumar</Text>
                    <Text>2022-11-05</Text>
                    <Text>2022-11-05</Text>
                    <Text>Amazon</Text>
                    <Text>LIT1 / Little Rock, AR</Text>
                    <Text>LIT1 / Little Rock, AR</Text>
                    <Avatar style={{background: "#13CA5C"}}></Avatar>
                    <Avatar style={{background: "#13CA5C"}}></Avatar>
                    <Button>Open <CaretDownOutlined/> </Button>
                </Col>
                <Col style={{display: "flex", justifyContent: "space-evenly", width: "100%", border: "1px solid var(--oq)", padding: "1rem", borderRadius: "10px", marginTop: "1rem"}}>
                    <Checkbox checked></Checkbox>
                    <Text>3072</Text>
                    <Text>1142V4P8S</Text>
                    <Text>Patel Hiteshkumar</Text>
                    <Text>2022-11-05</Text>
                    <Text>2022-11-05</Text>
                    <Text>Amazon</Text>
                    <Text>LIT1 / Little Rock, AR</Text>
                    <Text>LIT1 / Little Rock, AR</Text>
                    <Avatar style={{background: "#13CA5C"}}></Avatar>
                    <Avatar style={{background: "#13CA5C"}}></Avatar>
                    <Button>Open <CaretDownOutlined/> </Button>
                </Col>
                
            </Row>
        </div>
    )
}